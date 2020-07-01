import { useState } from "react";

export const useSetState = (initialState) => {
  const [state, setState] = useState(initialState);

  const setPartialState = (value) => {
    setState((prevValue) => ({
      ...prevValue,
      ...value,
    }));
  };

  return [state, setPartialState];
};
