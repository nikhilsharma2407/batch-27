import React from 'react'
import "./style.css"

import Card from 'react-bootstrap/Card';
import { Button, Col } from 'react-bootstrap';

function User({ userData }) {
    const { id, firstName, lastName, title, picture } = userData;
    const fullName = `${title} ${firstName} ${lastName}`;

    return (
        // 576px 768px 992px 1200px
        <Col xs={10} sm={6} md={5} lg={4} xl={3}>
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