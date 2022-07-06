import { useState } from "react";
import PropTypes from "prop-types";

const bgLight = `bg-[url('./assets/light.svg')]`;
const bgDark = `bg-[url('./assets/dark.svg')]`;

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

function ToggleSwitch({ onChange, isOn, isDisabled }) {
  const [toggleOn, setToggleOn] = useState(isOn);
  const handleClick = () => {
    setToggleOn((oldState) => !oldState);
    onChange();
  };
  return (
    <span
      onClick={handleClick}
      className={`dark:bg-gray-6ex00 flex h-5 w-9 cursor-pointer appearance-none rounded-full bg-gray-100 ease-linear ${
        toggleOn ? "bg-left" : "bg-right"
      } ${
        toggleOn ? bgLight : bgDark
      } bg-[length:20px] bg-no-repeat shadow-sm ${
        isDisabled ? "pointer-events-none grayscale" : ""
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
