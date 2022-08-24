import { useState } from "react";
import PropTypes from "prop-types";

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Select({ label, selected, onChange, options }) {
  const [value, setValue] = useState(selected);

  if (!options) return false;

  const handleChange = (e) => {
    onChange(Number(e.target.value));
    setValue(Number(e.target.value));
  };

  return (
    <label role="label" className="py-2 select-none">
      {label}
      <select
        role="listbox"
        onChange={handleChange}
        className="rounded mx-1"
        value={value}
      >
        {options.map((option) => (
          <option role="option" key={option.key} value={option.key}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
