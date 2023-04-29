import React, { useEffect, useState } from 'react';
import './App.css';
// import ComponentA from './ComponentA';
import FunctionComponent from './ComponentA/partial/FunctionComponent';
import Users from './Users/index.tsx';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './CustomNavbar';
import Login from './Login';
import Signup from './Signup';
import Routing from './Routing';
import Counter from './Counter';
import Toast from './Toast';
import LoadingComponent from './LoadingComponent';
import { loginWithCookieActionCreator } from './reducers/userReducer.ts';
import { useDispatch, useSelector } from "react-redux"
import ProtectedRoute from './ProtectedRoute';


function App() {
  const [greeting, setGreeting] = useState('Learning React!!!');
  const [showComponent, setShowComponent] = useState(true);
  const dispatch = useDispatch();
  const { isLoggedIn, loading } = useSelector(({ user }) => user)

  useEffect(() => {
    dispatch(loginWithCookieActionCreator());
  }, [])



  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Toast />
        <LoadingComponent />
        <Routes>
          {isLoggedIn !== null ? (<Route path='' element={<ProtectedRoute isLoggedIn={isLoggedIn}>
            <Users />
          </ProtectedRoute>} />) : <></>}



          <Route path='/routing' element={<Routing />} />
          <Route path='/counter' Component={Counter} />
          <Route path='/path'>
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
