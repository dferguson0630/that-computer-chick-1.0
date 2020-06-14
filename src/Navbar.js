import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
	render(){
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				  <Navbar.Brand href="/">That Computer Chick</Navbar.Brand>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link href="/services">Services</Nav.Link>
				      <Nav.Link href="/remote">Remote</Nav.Link>
				    </Nav>
				    <Nav>
				      <Nav.Link href="/about-us">About Us</Nav.Link>
				      <Nav.Link href="/contact">Contact </Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;