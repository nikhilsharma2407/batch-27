import React from 'react'
import "./style.css"

import Card from 'react-bootstrap/Card';
import { Button, Col } from 'react-bootstrap';

function User({ userData }) {
    const { id, firstName, lastName, title, picture } = userData;
    const fullName = `${title} ${firstName} ${lastName}`;

    return (
        <Col sm={10} md={5} lg={{span:3, offset:1}}>
            <Card Card className='user' >
                <Card.Body className='user-card'>
                    <img height="100px" className='profile' src={picture} alt="profile" />
                    <div>
                        <div style={{ marginBottom: "20px" }}>{fullName}</div>
                        <Button>Add friend</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>)
}
export default User