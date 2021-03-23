import { useState, useCallback, ChangeEvent } from 'react';

const useInput = (initialState: any) => {
  const [data, setData] = useState(initialState);

  const handler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, id } = event.target;

      setData({
        ...data,
        [id]: value,
      });
    },
    [data]
  );

  return [data, handler];
};
export default useInput;
