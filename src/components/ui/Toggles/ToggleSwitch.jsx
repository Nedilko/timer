import { useState } from "react";
import PropTypes from "prop-types";

const bgLight = `bg-[url('./assets/light.svg')]`;
const bgDark = `bg-[url('./assets/dark.svg')]`;

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool,
};

function ToggleSwitch({ onChange, isOn, isEnabled }) {
  const [toggleOn, setToggleOn] = useState(isOn);
  const handleClick = () => {
    setToggleOn((oldState) => !oldState);
    onChange(toggleOn);
  };

  return (
    <span
      role="checkbox"
      onClick={handleClick}
      className={`dark:bg-gray-6ex00 flex h-5 w-9 cursor-pointer appearance-none rounded-full bg-gray-100 ease-linear ${
        toggleOn ? "bg-left" : "bg-right"
      } ${
        toggleOn ? bgLight : bgDark
      } bg-[length:20px] bg-no-repeat shadow-sm ${
        isEnabled ? "" : "pointer-events-none grayscale"
      }`}
    >
      <span
        className={`${
          toggleOn ? "translate-x-full" : ""
        } m-0.5 h-4 w-4 rounded-full bg-gray-200
transition duration-75 ease-linear dark:bg-gray-700`}
      ></span>
    </span>
  );
}

export default ToggleSwitch;
