import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo1 from '../images/logo1.png'

function Menu() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" style={{display:'flex',backgroundColor:'transparent'}}>
        <Container  style={{marginLeft:'10%'}}>
       
        <Link to="/admin" style={{textDecoration:'none'}}><img src={logo1} style={{width:'100px',height:'70px'}}/></Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
       
          <Nav className="me-auto" style={{marginLeft:'10%',color:'black'}}>
         
            <Nav.Link href={'/eve'} >Events</Nav.Link>
            <Nav.Link href={'/about'} >About</Nav.Link>
            <Nav.Link href={'/signup'} >Register</Nav.Link>
            <Nav.Link href={'/login'} >Login</Nav.Link>
           
            <Nav.Link href='#'  className='meenu'></Nav.Link>
            </Nav>
           
          
        {/* </Navbar.Collapse> */}
        </Container>
        </Navbar>
    </div>
  )
}

export default Menu
