import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, Container, Row} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar className='p-3' bg="navbar navbar-dark bg-dark" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>LOGO</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'/> CART</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'/> SIGN IN</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
