import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../photos/JUST-Logo-01.png'
import './Header.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>
function Header(props) {
    return (
        <>
            <div xs="0"
                sm="576px"
                md="768px"
                lg="992px"
                xl="1200px"
                xxl="1400px" >

                <Navbar expand="lg"
                    className='nav-container'>
                    <img src={logo} className='logo' alt='logo' />
                    <Container className='container'>
                    <Navbar.Brand className='container-title-just'>JUST</Navbar.Brand>

                        <Navbar.Brand className='container-title'>Under Graduate Students</Navbar.Brand>
                        <Navbar.Collapse className="basic-navbar">
                            <Nav className="me-auto">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">University Graduates</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>

                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand className='container-title2'>Join Us</Navbar.Brand>

                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;