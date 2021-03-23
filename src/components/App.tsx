import React from 'react';
import './App.css';
import UseInputCompo from './UseInputCompo';
import UseToggleCompo from './UseToggleCompo';

function App() {
  return (
    <div className="main">
      <h1>커스텀 Hooks를 연습하는 연습장입니다.</h1>
      <UseInputCompo />
      <UseToggleCompo />
    </div>
  );
}

export default App;
