import './App.css';
import ComponentA from './ComponentA';

function App() {
  const greeting = 'Learning React!!!';
  return (
    <ComponentA msg={greeting}/>
  );
}

export default App;
