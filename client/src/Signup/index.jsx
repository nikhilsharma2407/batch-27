import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css";


function Signup() {
  const [password, setPassword] = useState('');
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
    })

  };

  const { isNumberValid,
    isLowerCaseValid,
    isUpperCaseValid,
    isSymbolValid,
    isLengthValid } = valid

  return (

    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card className='mt-5'>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={validate} />
                </Form.Group>
                <Button variant="primary" type="submit">
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


            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup