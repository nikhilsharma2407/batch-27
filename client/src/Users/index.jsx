import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User';
import {Container, Row} from "react-bootstrap"


// https://dummyapi.io/data/v1/user?limit=10
// 6404aa48e04d670642b100c6

function Users() {
    const [users, setUsers] = useState([]);

    const instance = axios.create({
        baseURL: "https://dummyapi.io/data/v1/user?limit=10",
        headers: { "app-id": "6404aa48e04d670642b100c6" }
    })

    useEffect(() => {
        (async () => {
            const { data } = (await instance.get()).data;
            console.log(data);
            setUsers(data);
        })()
    }, []);

    return (
        <Container fluid>
            <Row>
                {users.map(data => <User userData={data} key={data.id} />)}
            </Row>
        </Container>

    )
}

export default Users