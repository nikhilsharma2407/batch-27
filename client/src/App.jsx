import React, { useState } from 'react';
import './App.css';
// import ComponentA from './ComponentA';
import FunctionComponent from './ComponentA/partial/FunctionComponent';
import Users from './Users';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [greeting, setGreeting] = useState('Learning React!!!');
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {/* <button onClick={()=>setShowComponent(!showComponent)}>{showComponent?"Hide Component":"Show Component"}</button> */}
      {showComponent ? <Users /> : <></>}
    </>
  );
}

export default App;
