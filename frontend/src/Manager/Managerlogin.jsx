import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Managerlogin() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
const navigate = useNavigate();
    const handleEmail=(event)=>{
        setEmail(event.target.value);
      };
      const handlePassword=(event)=>{
        setPassword(event.target.value);
      };
      const handleSubmit = async (event)=>{
        const email=Email;
        event.preventDefault()
          try{
          const display =await axios.post('http://localhost:4000/managerlogin',{Email, Password})
          console.log(display.data)
          navigate(`/event/${Email}`);
        }
          catch(error){
            console.error(error);
          }
      }
  return (
    <div className='login'>
    
    <Form onSubmit={handleSubmit} style={{padding:'2% 5%',margin:'1% 30%'}} className='shadow-lg p-3 mb-5 rounded'>
   <h4>Admin</h4>
<Form.Group className="mb-3" controlId="formBasicemail">
<Form.Label>Email</Form.Label>
<Form.Control
type="text"
placeholder="Enter your email"
value={Email}
onChange={handleEmail}
required

/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicname">
<Form.Label>Password</Form.Label>
<Form.Control
type="text"
placeholder="Enter password"
value={Password}
onChange={handlePassword}
required

/>
</Form.Group>


<Button 
type="submit"  variant="dark">
Login
</Button>

</Form>
  </div>
  )
}

export default Managerlogin
