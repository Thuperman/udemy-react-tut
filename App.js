import React from 'react';
import Person from './Es6-Classes'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, world.</h1>
      <h2>And hello there {<Person title="test" options={["option1","option2","option3"]}/>}</h2> 
    </div>
  );
}

export default App;
