import { useEffect, useContext } from "react";
import ToggleSwitch from "../ui/Toggles/ToggleSwitch";
import SettingsContext from "../../state/Settings";
import { applyTheme } from "../../utils/helperFunctions";

// TODO: для теста рендерить ThemeToggleSwitch внутри провайдера SettingsContext
function ThemeToggleSwitch() {
  const { settings, handleApply } = useContext(SettingsContext);

  const handleToggleTheme = () => {
    handleApply({
      theme: settings.theme === "dark" ? "light" : "dark",
    });
  };

  useEffect(() => {
    applyTheme(settings.theme);
  }, [settings.theme]);

  return (
    <div className="flex justify-center p-2">
      <ToggleSwitch
        isEnabled={!settings.useSystemTheme}
        onChange={handleToggleTheme}
        isOn={settings.theme === "light"}
      />
    </div>
  );
}

export default ThemeToggleSwitch;
