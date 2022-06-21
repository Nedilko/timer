import { useState } from 'react';
import { createContext } from 'react';
import { loadSettings } from '../utils/storageAdapter';

const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(loadSettings());
  const handleApply = (data) => {
    setSettings((oldValue) => {
      return { ...oldValue, ...data };
    });
  };
  return (
    <SettingsContext.Provider value={{ settings, handleApply }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
