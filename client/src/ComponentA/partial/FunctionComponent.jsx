import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FunctionComponent(props) {
    const [time, setTime] = useState(0);
    const [id, setId] = useState(1);
    const [userData, setUserData] = useState({ name: "Nikhil" });
    const [name, setName] = useState("Nikhil");
    console.log("render", props);
    const { msg } = props
    const BASE_URL = "https://jsonplaceholder.typicode.com/users/";

    const getUserData = async () => {
        console.log("here");
        document.title = "Learning React";
        // const { id } = this.state;
        const { data } = await axios.get(BASE_URL + id);
        setUserData(data)
    }

    useEffect(() => {
        document.title = "Learning React!"
        console.log("componentDidMount");

        return ()=>{
            console.log("unmounting stage");
        }
        // runs only one time, behaves like component did mount
    }, []);

    useEffect(() => {
        // works like component did update
        const timer = setInterval(() => {
            console.log("interval");
            setTime(time=>time+1);
        }, 1000);
        getUserData();
        return ()=>{
            clearInterval(timer);
        }
    }, [id])




    return (
        <>
            <h1>{msg}</h1>
            <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
            <input type="number" placeholder='id' min={1} max={10} onChange={e => setId(e.target.value)} />
            <h1> Hello {name} {id.value}</h1>
            <h2>time elapsed - {time}</h2>
        </>
    )
}

export default FunctionComponent