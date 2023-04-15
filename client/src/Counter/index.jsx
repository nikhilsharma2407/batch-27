import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrementActionCreator, incrementActionCreator } from '../reducers/countReducer';

function Counter() {
    // get value from store
    const { count } = useSelector(state => state.count);

    // dispatch action
    const dispatch = useDispatch();


    const [value, setValue] = useState(0);
    return (
        <>
            <h1>count - {count}</h1>
            <input type="number" min="0" max="10" placeholder='enter number'
                onChange={e => setValue(+e.target.value)}
            />
            <div>
                <Button onClick={() => dispatch(incrementActionCreator(value))} variant='outline-primary'>+</Button>
                <Button onClick={() => dispatch(decrementActionCreator(value))} variant='outline-danger'>-</Button>
            </div>
        </>

    )
}

export default Counter