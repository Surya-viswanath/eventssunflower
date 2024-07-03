// import axios from 'axios';
// import React, { useState } from 'react'
// import toast from "react-hot-toast";
// import { useAuth } from './AdminContext';
// import { useForm } from "react-hook-form";
// import { GoInfo } from "react-icons/go";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button, Form } from 'react-bootstrap';

// function Adminlogin() {
//     const [Email, setEmail] = useState('')
//     const [Password, setPassword] = useState('')
// const navigate = useNavigate();
// const { login } = useAuth();
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
//           const display =await axios.post('http://localhost:4000/adminlogin',{Email, Password})
//           console.log(display.data)
//           navigate(`/adminop`);
//         }
//           catch(error){
//             console.error(error);
//           }
//       }
    
//   return (
//     <div>
    
//   <Form onSubmit={handleSubmit} style={{padding:'2% 5%',margin:'1% 30%'}} className='shadow-lg p-3 mb-5 rounded'>
//    <h4>Login Your Site</h4>
// <Form.Group className="mb-3" controlId="formBasicemail">
// <Form.Label>Email</Form.Label>
// <Form.Control
// type="text"
// placeholder="Enter your email"
// value={Email}
// onChange={handleEmail}
// required

// />
// </Form.Group>

// <Form.Group className="mb-3" controlId="formBasicname">
// <Form.Label>Password</Form.Label>
// <Form.Control
// type="text"
// placeholder="Enter password"
// value={Password}
// onChange={handlePassword}
// required

// />
// </Form.Group>


// <Button 
// type="submit"  variant="dark">
// Login
// </Button>

// </Form>
//   </div>
//   )
// }

// export default Adminlogin


// import axios from 'axios';
// import React, { useState } from 'react'
// import toast from "react-hot-toast";
// import { useAuth } from './AdminContext';
// import { Link, useNavigate } from "react-router-dom";
// import { Button, Form } from 'react-bootstrap';

// function Adminlogin() {
//     const [Email, setEmail] = useState('');
//     const [Password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const handleEmail = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePassword = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const toastLoading = toast.loading('User Signing...');
//             const response = await login(Email, Password);
//             toast.dismiss(toastLoading);
//             toast.success('Login Successfully');
//             navigate('/adminh');
//         } catch (error) {
//             // toast.dismiss(toastLoading);
//             toast.error(error?.response?.data || 'Login Failed');
//         }
//     };

//     return (
//         <div>
//             <Form onSubmit={handleSubmit} style={{padding:'2% 5%',margin:'1% 30%'}} className='shadow-lg p-3 mb-5 rounded'>
//                 <h4>Login Your Site</h4>
//                 <Form.Group className="mb-3" controlId="formBasicemail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter your email"
//                         value={Email}
//                         onChange={handleEmail}
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicname">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password" // Use type="password" for security
//                         placeholder="Enter password"
//                         value={Password}
//                         onChange={handlePassword}
//                         required
//                     />
//                 </Form.Group>

//                 <Button type="submit" variant="dark">
//                     Login
//                 </Button>
//             </Form>
//         </div>
//     )
// }

// export default Adminlogin;