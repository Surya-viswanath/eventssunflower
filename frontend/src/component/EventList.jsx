import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function EventList() {
    const [Email, setEmail] = useState('');
    const [Time, setTime] = useState('');
    const [Type, setType] = useState('');
    const [Place, setPlace] = useState('');
    const [Date, setDate] = useState('');
   const navigate = useNavigate();
  const handleEmail =(event)=>{
    setEmail(event.target.value);
  };
  const handleTime=(event)=>{
    setTime(event.target.value);
  };
  const handleType=(event)=>{
    setType(event.target.value);
  };
  const handlePlace=(event)=>{
    setPlace(event.target.value);
  };
  const handleDate=(event)=>{
    setDate(event.target.value);
  };
  
  const handleSubmit =async(event)=>{
    event.preventDefault()
    try{
    const display =await axios.post('http://localhost:4000/eventcreate',{Email,Time,Type,Place,Date})
    console.log(display.data)
    navigate(-1)
}
    catch(error){ 
        console.error(error);
    }
  }
  const types = [
    'Wedding',
    'Reception',
    'Birthday',
    'Meetings',
    'Others'
  ];

 
  return (
    <div>
      
      
      <Form  onSubmit={handleSubmit} style={{padding:'2% 5%',margin:'5% 30%',border:'1px solid black'}}>
       
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter email"
      value={Email}
      onChange={handleEmail}
      required
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Time</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter the Time of event starting"
      value={Time}
      onChange={handleTime}
      required
      />
    </Form.Group>
    <Form.Group className='mb-3' controlId='formBasicname'>
    <label htmlFor="Type" style={{marginRight:'10px'}}>Type:</label>
      <select id="Type" value={Type} onChange={handleType}>
        <option value="" style={{padding:'10px',border:'5px solid black'}}>-- Select --</option>
        {types.map((Type, index) => (
          <option key={index} value={Type}>
            {Type}
          </option>
        ))}
      </select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Place</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter the place"
      value={Place}
      onChange={handlePlace}
      required
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Date</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter date"
      value={Date}
      onChange={handleDate}
      required
      />
    </Form.Group>
    <button 
    type="submit"
    >
    Add
    </button>
  </Form>

    </div>
    
  )
}

export default EventList
