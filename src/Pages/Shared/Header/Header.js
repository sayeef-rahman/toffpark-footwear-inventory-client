import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light" className='text-dark'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/" className='fw-bold'>Toffpark Wearhouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className='navbar-link'>
                        <Link to='/' className='text-dark'>Home</Link>
                        <Link to='/blog' className='text-dark'>Blog</Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="myitems" className='text-dark'>My Items</Nav.Link>
                                <Nav.Link as={Link} to="addshoe" className='text-dark'>Add Shoe</Nav.Link>
                                <Nav.Link as={Link} to="allproducts" className='text-dark'>Inventory</Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <Nav.Link className='login-out-button text-dark' onClick={handleSignOut}>
                                    Sign Out
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="login" className='text-dark'>
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;