import React from 'react'
import {useSelector} from "react-redux"
import Spinner from 'react-bootstrap/Spinner';
import './style.css'

function LoadingComponent() {
    const { loading } = useSelector(({ user }) => user);
    if (loading) {
        return <Spinner className='spinner' animation="border" role="status" />
    }
    return <></>

}

export default LoadingComponent