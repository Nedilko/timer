import PropTypes from 'prop-types';

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Select({ label, selected, onChange, options }) {
  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <label className="py-2 select-none">
      {label}
      <select onChange={handleChange} className="rounded mx-1" value={selected}>
        {options.map((value, i) => (
          <option key={i} value={i}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
