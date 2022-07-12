import PropTypes from "prop-types";

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

function Checkbox({ checked, label, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  console.log(checked);

  return (
    <label
      htmlFor="useSystemTheme"
      className="py-2 flex flex-row items-center select-none"
    >
      {label}
      <input
        onChange={handleChange}
        id="useSystemTheme"
        type="checkbox"
        checked={checked}
        className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
    </label>
  );
}

export default Checkbox;
