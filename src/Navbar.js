import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import chick from './Pages/chick.jpg'

class NavBar extends React.Component {
	render(){
		return (
			<div>
				<Navbar bg="light" expand="lg" >
      				<Navbar.Brand href="/" style={{fontFamily: 'Bellota', fontSize: '2.5vw'}}>
      					That Computer Chick
      						<img src={chick} height="30px" width="30px" style={{borderRadius: "30px"}}/>
      				</Navbar.Brand>
      				<Navbar.Toggle aria-controls="basic-navbar-nav"  />
      				<Navbar.Collapse id="basic-navbar-nav" >
      					<Nav className="ml-auto">
      						<Nav.Link href="/about-us">About</Nav.Link>
      						<Nav.Link href="/services">Services</Nav.Link>
      						<Nav.Link href="/contact">Contact</Nav.Link>
      					</Nav>
      				</Navbar.Collapse>
      			</Navbar>
			</div>
		);
	}
}

export default NavBar;