import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { signupActionCreator } from '../reducers/userReducer.ts';
import { Link } from "react-router-dom"
import "./style.css";


function Signup() {
  const { qrCode } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const [valid, setValid] = useState({
    isNumberValid: false,
    isLowerCaseValid: false,
    isUpperCaseValid: false,
    isSymbolValid: false,
    isLengthValid: false,
  });


  const validate = (e) => {
    const pwd = e.target.value;
    // PATTERN.test(testString);
    const NUM_PAT = /\d/;
    const LOWER_CASE_PAT = /[a-z]/;
    const UPPER_CASE_PAT = /[A-Z]/;
    const SYMBOL_PAT = /[\W_]/;


    const isLengthValid = pwd.length >= 8;

    const isNumberValid = NUM_PAT.test(pwd);
    const isLowerCaseValid = LOWER_CASE_PAT.test(pwd);
    const isUpperCaseValid = UPPER_CASE_PAT.test(pwd);
    const isSymbolValid = SYMBOL_PAT.test(pwd)


    console.log({
      isNumberValid,
      isLowerCaseValid,
      isUpperCaseValid,
      isSymbolValid,
      isLengthValid
    });

    setValid({
      isNumberValid,
      isLowerCaseValid,
      isUpperCaseValid,
      isSymbolValid,
      isLengthValid
    });


    setPassword(pwd);

  };

  const { isNumberValid,
    isLowerCaseValid,
    isUpperCaseValid,
    isSymbolValid,
    isLengthValid } = valid

  const isFormValid = Object.values(valid).every(Boolean) && [name, username, password].every(Boolean);

  const signup = (e) => {
    e.preventDefault();
    const payload = { name, username, password };
    dispatch(signupActionCreator(payload));
  }



  return (

    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card className='mt-5'>
            <Card.Body>
              {qrCode ? <>
                <h1>Two Factor authentication setup</h1>
                <h2>Please scan the QR code with Google Authenticator</h2>
                <div className='d-flex flex-column'>
                  <img src={qrCode} style={{
                    height: "200px",
                    width: "200px",
                    alignSelf: "center"
                  }} />
                  <Button variant='outline-primary' as={Link} to='/path/login'>
                    Proceed to Login
                  </Button>
                </div>
              </> : <>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name" onChange={e => setName(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={validate} />
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={!isFormValid} onClick={signup}>
                    Submit
                  </Button>
                </Form>

                <section>
                  <div className={isNumberValid ? 'valid' : 'invalid'}>Atleast 1 number</div>
                  <div className={isLowerCaseValid ? 'valid' : 'invalid'}>Lowercase letter</div>
                  <div className={isUpperCaseValid ? 'valid' : 'invalid'}>Uppercase letter</div>
                  <div className={isSymbolValid ? 'valid' : 'invalid'}>Special character</div>
                  <div className={isLengthValid ? 'valid' : 'invalid'}>Atleast 8 characters</div>
                </section>
              </>}



            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup