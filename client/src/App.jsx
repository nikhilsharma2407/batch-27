import React, { useState } from 'react';
import './App.css';
// import ComponentA from './ComponentA';
import FunctionComponent from './ComponentA/partial/FunctionComponent';

function App() {
  const [greeting, setGreeting] = useState('Learning React!!!');
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {showComponent ? <FunctionComponent msg={greeting} /> : <></>}
      <button onClick={() => setGreeting("Learning Hooks!!!")}>Update Greeting</button>
      <button onClick={()=>setShowComponent(!showComponent)}>{showComponent?"Hide Component":"Show Component"}</button>
    </>
  );
}

export default App;
