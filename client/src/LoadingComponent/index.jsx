import React from 'react'
import {useSelector} from "react-redux"
import Spinner from 'react-bootstrap/Spinner';
import './style.css'

function LoadingComponent() {
    const { loading, usersLoading } = useSelector(({ user }) => user);
    if (loading || usersLoading) {
        return <Spinner className='spinner' animation="border" role="status" />
    }
    return <></>

}

export default LoadingComponent