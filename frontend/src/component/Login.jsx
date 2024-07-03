// import axios from 'axios';
// import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom';
// import './signup.css';
// import Menu from './Menu';

// function Login() {
//     const [Email, setEmail] = useState('')
//     const [Password, setPassword] = useState('')
// const navigate = useNavigate();
//     const handleEmail=(event)=>{
//         setEmail(event.target.value);
//       };
//       const handlePassword=(event)=>{
//         setPassword(event.target.value);
//       };
//       const handleSubmit = async (event)=>{
//         const email=Email;
//         event.preventDefault()
//           try{
//           const display =await axios.post('http://localhost:4000/login',{Email, Password})
//           console.log(display.data)
//           // navigate(`/view/${email}`);
//           navigate(`/Home`);
//         }
//           catch(error){
//             console.error(error);
//           }
//       }
//   return (
//     <div className='login'>
    
//       <Form onSubmit={handleSubmit} style={{padding:'2% 5%',margin:'1% 30%'}} className='shadow-lg p-3 mb-5 rounded'>
//      <h4>Login Here</h4>
// <Form.Group className="mb-3" controlId="formBasicemail">
//   <Form.Label>Email</Form.Label>
//   <Form.Control
//   type="text"
//   placeholder="Enter your email"
//   value={Email}
//   onChange={handleEmail}
//   required
 
//   />
// </Form.Group>

// <Form.Group className="mb-3" controlId="formBasicname">
//   <Form.Label>Password</Form.Label>
//   <Form.Control
//   type="text"
//   placeholder="Enter password"
//   value={Password}
//   onChange={handlePassword}
//   required
 
//   />
// </Form.Group>

// <div style={{display:'flex'}}>
// <Button 
// type="submit"  variant="dark">
// Login
// </Button>
// <Link to="/adminlogin" style={{textDecoration:'none',marginLeft:'70%',color:'black'}}><p >Admin</p></Link>
// </div>
// </Form>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider'; // Adjust the path as needed
import './signup.css';
import useAuth from '../hooks/useAuth';
// import { useAuth } from '../Authprovider';

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(Email, Password);
            navigate('/Home');
        } catch (error) {
            console.error(error);
            console.log('error');
        }
    };

    return (
        <div className='login'>
            <Form onSubmit={handleSubmit} style={{ padding: '2% 5%', margin: '1% 30%' }} className='shadow-lg p-3 mb-5 rounded'>
                <h4>Login Here</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={Email}
                        onChange={handleEmail}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={Password}
                        onChange={handlePassword}
                        required
                    />
                </Form.Group>

                <div style={{ display: 'flex' }}>
                    <Button type="submit" variant="dark">Login</Button>
                    <Link to="/adminlogin" style={{ textDecoration: 'none', marginLeft: '70%', color: 'black' }}>
                        <p>Admin</p>
                    </Link>
                </div>
            </Form>
        </div>
    );
}

export default Login;