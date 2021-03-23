import React from 'react';
import './App.css';
import UseInputCompo from './UseInputCompo';

function App() {
  return (
    <div className="main">
      <h1>커스텀 Hooks를 연습하는 연습장입니다.</h1>
      <hr />
      <h2>useInput</h2>
      <UseInputCompo />
    </div>
  );
}

export default App;
