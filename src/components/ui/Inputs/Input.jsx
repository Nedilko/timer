import { useEffect, useState } from "react";
import PropTypes from "prop-types";

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

function Input({ value, label, placeholder = "Greetings text", onChange }) {
  const [textValue, setTextValue] = useState(value);
  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    onChange(textValue);
  }, [textValue, onChange]);

  return (
    <label role="label" className="py-2 select-none">
      {label}
      <input
        onChange={handleChange}
        className="mx-1 px-1 rounded bg-gray-200"
        type="text"
        placeholder={placeholder}
        value={textValue}
      />
    </label>
  );
}

export default Input;
