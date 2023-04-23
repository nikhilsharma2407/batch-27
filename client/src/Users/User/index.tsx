import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import { useNavigate } from "react-router-dom"

import Card from 'react-bootstrap/Card';
import { Button, Col } from 'react-bootstrap';
import { addFriendActionCreator, IState, removeFriendActionCreator } from '../../reducers/userReducer.ts';
import IUser from './IUser';
import { IReducers } from '../../reducers/rootReducer';

interface IProps {
    userData: IUser
}

interface ICombinedState{
    user: IState; count: any
}

function User({ userData }: IProps) {

    const { friendList, username } = useSelector<ICombinedState, IState>(state => state.user);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { id, firstName, lastName, title, picture } = userData;
    const fullName = `${title} ${firstName} ${lastName}`;
    const isFriend = friendList.includes(id);

    const addFriend = () => {
        if (!username) {
            navigate('/user/login', { state: { redirectTo: '/' } })
        }
        const payload = { id, name: `${firstName} ${lastName}` }
        dispatch(addFriendActionCreator(payload))
    }

    const removeFriend = () => {
        const payload = { id, name: `${firstName} ${lastName}` }
        dispatch(removeFriendActionCreator(payload))
    }

    return (
        // 576px 768px 992px 1200px
        <Col xs={10} sm={6} md={5} lg={4} xl={3}>
            <Card className='user' >
                <Card.Body className='user-card'>
                    <img height="100px" className='profile' src={picture} alt="profile" />
                    <div>
                        <div style={{ marginBottom: "20px" }}>{fullName}</div>
                        {isFriend ? <Button variant='danger' onClick={removeFriend}>Remove friend</Button> : <Button onClick={addFriend}>Add friend</Button>}
                    </div>
                </Card.Body>
            </Card>
        </Col>)
}
export default User