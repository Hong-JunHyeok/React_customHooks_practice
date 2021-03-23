import React, { useState, useCallback } from 'react';

const useToggle = (initialState = false): [boolean, (override?: boolean) => void] => {
  const [toggled, setToggle] = useState<boolean>(initialState);
  const toggle = useCallback(
    (override?: boolean) =>
      setToggle((prevToggle: boolean) => (override !== undefined ? override : !prevToggle)),
    []
  );
  return [toggled, toggle];
};

export default useToggle;
