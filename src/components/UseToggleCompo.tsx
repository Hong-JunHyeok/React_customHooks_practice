import useInput from 'hooks/useInput';
import useToggle from 'hooks/useToggle';
import React, { useState } from 'react';

const style = {
  padding: '1rem',
  background: 'black',
  color: 'white',
  cursor: 'pointer',
};
const toggledStyle = {
  background: '#f2f2f2',
  color: 'black',
  padding: '1rem',
  cursor: 'pointer',
};

const UseToggleCompo = () => {
  const [isChecked, toggleIsChecked] = useToggle(false);

  return (
    <>
      <hr />
      <h2>useToggle</h2>
      <div onClick={() => toggleIsChecked()} style={isChecked ? toggledStyle : style}>
        {isChecked ? 'on' : 'off'}
      </div>
    </>
  );
};

export default UseToggleCompo;
