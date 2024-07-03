import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Myevent() {
    const { email } = useParams();
    const [first, setFirst] = useState([]); 
    useEffect(() => {
        const client = async () => {
            try {
                const responses = await axios.get('http://localhost:4000/getevent');
                setFirst(responses.data);
                console.log(responses.data); 
            } catch (error) {
                console.error(error);
            }
        };
        client();
    }, []);
    const getmail = email;
    const View = first.filter((item) => item.Email === getmail);
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4000/deleteevent/${id}`);
        
          setFirst(first.filter(list => list._id !== id));
        } catch (error) {
          console.error('Error deleting list:', error);
        }
      };
  return (
    <div style={{display:'flex'}}>
     
      {View.map((item)=>(
      <Card style={{ width: '18rem',margin:'1%' }}>
      <Card.Body>
        <Card.Title>{item.Type}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Venu : {item.Place}</Card.Subtitle>
        <Card.Text>
          Time : {item.Time}<br></br>
          Date : {item.Date}
        </Card.Text>
        <Button  variant="danger" onClick={() => handleDelete(item._id)} style={{width:'100px',marginLeft:'10px'}}>Delete event</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
  )
}

export default Myevent
