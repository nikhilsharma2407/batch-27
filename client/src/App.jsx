import React, { useState } from 'react';
import './App.css';
// import ComponentA from './ComponentA';
import FunctionComponent from './ComponentA/partial/FunctionComponent';
import Users from './Users';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './CustomNavbar';
import Login from './Login';
import Signup from './Signup';
import Routing from './Routing';
import Counter from './Counter';

function App() {
  const [greeting, setGreeting] = useState('Learning React!!!');
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='' element={showComponent ? <Users /> : <></>} />
          <Route path='/routing' element={<Routing />} />
          <Route path='/counter' Component={Counter} />
          <Route path='/user'>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>

          {/* <button onClick={()=>setShowComponent(!showComponent)}>{showComponent?"Hide Component":"Show Component"}</button> */}
          { }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
