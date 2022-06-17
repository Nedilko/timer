import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired
}

function Select({name, label, selected = null, onChange, options}) {
  const refSelect = useRef(null)
  const [value, setValue] = useState(selected)
  const handleChange = (e) => {
    setValue(parseInt(refSelect.current.value))
  }

  useEffect(()=>{
    const selectedOption = {}
    selectedOption[refSelect.current.name] = value
    onChange(selectedOption)
  },[value])

  return (
    <label className='py-2 select-none'>{label}
      <select ref={refSelect} onChange={handleChange} className="rounded mx-1" name={name} value={value}>
        {options.map((value, i) => <option key={i} value={i}>{value}</option>)}
      </select>
    </label>
  )
}

export default Select