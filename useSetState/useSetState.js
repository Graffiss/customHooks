import { useState } from "react";

export const useSetState = (initialState) => {
  const [state, setState] = useState(initialState);
  const callbackRef = useRef(null);

  const setPartialState = (state, callback) => {
    callbackRef.current = callback;
    setState(state);
  };

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);
      callbackRef.current = null;
    }
  }, [state]);

  return [state, setPartialState];
};
