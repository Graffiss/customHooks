import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const useNightMode = () => {
  const [nightMode, setNightMode] = useState(false);
  const toggleTheme = () => {
    if (nightMode === false) {
      setNightMode(true);
      window.localStorage.setItem("nightMode", true);
    } else {
      setNightMode(false);
      window.localStorage.setItem("nightMode", false);
    }
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem("nightMode");
    /* eslint-disable no-unused-expressions */
    JSON.parse(localMode) && setNightMode(JSON.parse(localMode));
  }, []);

  return [nightMode, toggleTheme];
};

useNightMode.propTypes = {
  nightMode: PropTypes.bool.isRequired,
};
