import PropTypes from "prop-types";
import Modal from "../ui/Modals/Modal";
import Select from "../ui/Selects/Select";
import Input from "../ui/Inputs/Input";
import Checkbox from "../ui/Checkboxes/Checkbox";
import { settingsData } from "../../settings";
import { useState } from "react";

SettingsModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

function SettingsModal({ settings, onCancel, onApply }) {
  const [greetingsText, setGreetingsText] = useState("sample");
  const [day, setDay] = useState(settings.targetDate.days);
  const [hour, setHour] = useState(settings.targetDate.hours);
  const [useSystemTheme, setUseSystemTheme] = useState(settings.useSystemTheme);
  const handleApply = () => {
    onApply({
      greetingsText,
      targetDate: {
        days: Number(day),
        hours: Number(hour),
      },
      useSystemTheme,
    });
  };

  return (
    <Modal onApply={handleApply} onCancel={onCancel} title="Settings">
      <div className="flex flex-col py-2">
        <Input
          value={greetingsText}
          onChange={setGreetingsText}
          placeholder="Have a cup of tea!"
          label="Greetings text"
        />
        <Select
          onChange={setDay}
          selected={day}
          options={settingsData.days}
          label={"Day"}
        />
        <Select
          name="hours"
          onChange={setHour}
          selected={hour}
          options={settingsData.hours}
          label={"Hour"}
        />
        <Checkbox
          onChange={setUseSystemTheme}
          checked={useSystemTheme}
          label="Use system theme"
        />
      </div>
    </Modal>
  );
}

export default SettingsModal;
