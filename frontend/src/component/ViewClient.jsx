
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function ViewClient() {
    const { email } = useParams();
    const [first, setFirst] = useState([]); 
    useEffect(() => {
        const client = async () => {
            try {
                const responses = await axios.get('http://localhost:4000/get');
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
          await axios.delete(`http://localhost:4000/delete/${id}`);
         
          setFirst(first.filter(list => list._id !== id));
        } catch (error) {
          console.error('Error deleting list:', error);
        }
      };
    return (
        <div>
            <Container style={{alignItems:'center',textAlign:'center'}}>
            {View.map((data) => (
                <>
                <h4 key={data.id}>{data.Name}</h4>
                <h6>{data.Place}</h6> 
               <h6>{data.Phone}</h6>
               <img src={data.Profile} style={{borderRadius:'5px',height:'150px',width:'150px'}}></img>
               <Button  variant="danger" onClick={() => handleDelete(data._id)} style={{width:'100px',marginLeft:'10px'}}>Delete my account</Button>
               <Link to={`/myeve/${data.Email}`} style={{textDecoration:'none'}}> <Button variant="dark">View My events</Button></Link>
                </>
            ))}
            
            </Container>
        </div>
    );
}

export default ViewClient;

