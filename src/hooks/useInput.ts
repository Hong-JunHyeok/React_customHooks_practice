import { useState, useCallback, ChangeEvent } from 'react';

const useInput = (initialValue: any) => {
  const [data, setData] = useState(initialValue);

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
