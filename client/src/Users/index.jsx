import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User';
import {Container, Row} from "react-bootstrap"
import { useSearchParams } from "react-router-dom"


// https://dummyapi.io/data/v1/user?limit=10
// 6404aa48e04d670642b100c6

function Users() {
  const [search] = useSearchParams();

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

    const filterUsers = (user)=>{
        const searchTerm = (search.get('name')||'').toLowerCase();
        const {firstName, lastName} = user;
        return firstName.toLowerCase().includes(searchTerm) || lastName.toLowerCase().includes(searchTerm)

    }

    return (
        <Container fluid>
            <Row>
                {users.filter(filterUsers)
                .map(data => <User userData={data} key={data.id} />)}
            </Row>
        </Container>

    )
}

export default Users