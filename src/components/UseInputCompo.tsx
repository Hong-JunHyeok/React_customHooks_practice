import React from 'react';
import useInput from 'hooks/useInput';

function UseInputCompo() {
  const [form, formHandler] = useInput({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form.email, form.password);
  };

  return (
    <>
      <hr />
      <h2>useInput</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={form.email} onChange={formHandler} id="email" />
        <input type="password" value={form.password} onChange={formHandler} id="password" />
        <button>제출</button>
      </form>
    </>
  );
}

export default UseInputCompo;
