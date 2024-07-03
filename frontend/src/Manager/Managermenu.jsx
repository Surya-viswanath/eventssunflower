import React from 'react'
import logo1 from '../images/logo1.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Managermenu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{display:'flex'}}>
        <Container  style={{marginLeft:'10%'}}>
       
       <Link to={'/adminop'}><img src={logo1} style={{width:'100px',height:'70px'}}/></Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'10%'}}>
         
            <Nav.Link href={'/#'} >Create events</Nav.Link>
            <Nav.Link href={'/#'} >Customers</Nav.Link>
            <Nav.Link href={'/event'} >My events</Nav.Link>
            <Nav.Link href={'/'} >Logout</Nav.Link>
           
            <Nav.Link href='#'  className='meenu'></Nav.Link>
            </Nav>
           
          
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Managermenu
