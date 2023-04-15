import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button } from 'react-bootstrap'

import { Link, useSearchParams } from "react-router-dom"

function MyNavbar() {

  const [,setSearch] = useSearchParams();
  
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/routing'>Routing</Nav.Link>
            <Nav.Link as={Link} to='/counter'>Counter</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/user/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/user/signup'>Signup</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={e=>setSearch({name:e.target.value})}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;