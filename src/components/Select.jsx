import {useState} from 'react'
import PropTypes from 'prop-types'

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  selected: PropTypes.number
}

function Select({label, selected = null,options}) {
  const [value, setValue] = useState(selected)
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <label className='py-2'>{label}
      <select onChange={handleChange} className="rounded mx-1" name={label} value={value}>
        {options.map((value, i) => <option key={i} value={i}>{value}</option>)}
      </select>
    </label>
  )
}

export default Select