import { useState, useEffect } from "react";
import { createContext } from "react";
import { loadSettings, writeSettings } from "../utils/storageAdapter";
import PropTypes from "prop-types";

const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(loadSettings());
  const handleApply = (data) => {
    setSettings((oldValue) => {
      return { ...oldValue, ...data };
    });
  };

  useEffect(() => {
    writeSettings(settings);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, handleApply }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Если проптайпы обьявить до 8 строки линтер ругается:
// Uncaught ReferenceError: can't access lexical declaration 'SettingsContextProvider' before initialization
SettingsContextProvider.propTypes = {
  children: PropTypes.node,
};

export default SettingsContext;
