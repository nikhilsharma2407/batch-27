import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { loginApi } from './apiUtil';
import { useDispatch, useSelector } from 'react-redux'
import { loginActionCreator } from '../reducers/userReducer.ts';
import {useLocation, useNavigate} from "react-router-dom"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {name} = useSelector(({user }) => user);

  const dispatch = useDispatch();


  const {state:redirectTo} = useLocation() || {};


  const login = () => {
    dispatch(loginActionCreator({ username, password }));
    if(redirectTo){
      console.log(redirectTo);
      // useNavigate(redirectTo)
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={{ offset: 4, span: 4 }} md={{ offset: 3, span: 6 }} sm={{ offset: 1, span: 10 }}>
          <Card className="mt-3 p-3 signup">
            <Card.Title>Login</Card.Title>
            <Card.Body>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={!(username.length > 0 && password.length > 0)} onClick={login}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login