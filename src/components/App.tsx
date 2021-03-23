import React from 'react';
import './App.css';
import useInput from 'hooks/useInput';

function App() {
  const [form, formHandler] = useInput({
    email: 'email',
    password: 'password',
  });

  return (
    <div className="main">
      <h1>커스텀 Hooks를 연습하는 연습장입니다.</h1>
      <hr />
      <h2>useInput</h2>
      <form>
        <input type="text" value={form.email} onChange={formHandler} id="email" />
        <input type="password" value={form.password} onChange={formHandler} id="password" />
      </form>
    </div>
  );
}

export default App;
