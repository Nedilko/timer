import { useEffect, useContext } from 'react';
import ToggleSwitch from './ToggleSwitch';
import SettingsContext from '../state/Settings';

const applyTheme = (light) => {
  if (light) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
};

function ThemeToggleSwitch() {
  const { settings, handleApply } = useContext(SettingsContext);

  const handleToggleTheme = () => {
    handleApply({
      theme: settings.theme === 'dark' ? 'light' : 'dark',
    });
  };

  useEffect(() => {
    applyTheme(settings.theme === 'light');
  }, [settings.theme]);

  return (
    <ToggleSwitch
      onChange={handleToggleTheme}
      isOn={settings.theme === 'light'}
    />
  );
}

export default ThemeToggleSwitch;
