import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";

function Managers() {
    const [Customer, setCustomer] = useState([])
 
    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:4000/getmanager');
            setCustomer(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);

      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4008/deletemanager/${id}`);
          // Update the state after successful deletion
          setCustomer(Customer.filter(list => list._id !== id));
        } catch (error) {
          console.error('Error deleting list:', error);
        }
      };
  return (
    <div>
      <div className="main-head section-p1" style={{marginLeft:'2%'}}>
         <h3 className='head-restaurants' >Customer List</h3>
    <table width="100%" className='table-border ' style={{marginTop:'2%'}}>
   
<thead style={{padding:'20px'}}>
    <tr className='table'>
       <td className='table-head'>Customer Name</td>
        <td className='table-head'>Email</td>
        <td className='table-head'>Phone</td>
        <td className='table-head'>Customer id</td>
        <td className='table-head'>Remove</td>
        
    </tr>
</thead>
<tbody style={{padding:'20px'}}>
{Customer.map(display =>(
    <tr className='table'>
        <td>{display.Name}</td>
        <td>{display.Email}</td>
        <td>{display.Phone}</td>
        <td>{display._id}</td>
        <td><MdDelete className='delete-icon' onClick={() => handleDelete(display._id)}/> </td>
       
        
    </tr>
    
    ))}
</tbody>
    </table>
    <div className='normal-btn'>
    
    </div>
    </div>
    </div>
  )
}

export default Managers
