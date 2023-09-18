import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';
function Navigationbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">Student Assigment App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/Assigment'}>
                                <Nav.Link>Register Student Assigment</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/ViewAssigment'}>
                                <Nav.Link>ViewAssigment</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/Profile'}>
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                    
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              User
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="/Signup">Signup</Dropdown.Item>
                              <Dropdown.Item href="/activeLogin">Login</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
             );
}

export default Navigationbar;