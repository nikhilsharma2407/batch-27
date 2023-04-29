import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from "react-redux"
import { Form, Button } from 'react-bootstrap'

import { Link, useSearchParams } from "react-router-dom"
import { logoutActionCreator } from '../reducers/userReducer.ts';

function MyNavbar() {
  const { username } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const [, setSearch] = useSearchParams();

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
            {username ? <Nav.Link as={Button} variant='outline' onClick={() => dispatch(logoutActionCreator())} >Logout</Nav.Link> :
              <>
                <Nav.Link as={Link} to='/path/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/path/signup'>Signup</Nav.Link>
              </>
            }

          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={e => setSearch({ name: e.target.value })}
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