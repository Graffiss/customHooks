import { useState } from "react";

export const useSetState = (initialState) => {
  const [state, setState] = useState(initialState);

  const setPartialState = (value) => {
    typeof value === "function"
      ? setState((prevValue) => ({
          ...prevValue,
          ...value(prevValue),
        }))
      : setState((prevValue) => ({
          ...prevValue,
          ...value,
        }));
  };

  return [state, setPartialState];
};
