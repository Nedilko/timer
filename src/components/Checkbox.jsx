import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

function Checkbox({checked = false, name, onChange}) {
  const [isChecked, setIsChecked] = useState(checked)
  const handleChange = (e) => {
    setIsChecked((oldState) => !oldState)
  }

  useEffect(() => {
    const checkbox = {}
    checkbox[name] = isChecked
    onChange(checkbox)
  }, [isChecked])

  return (
    <label htmlFor={name} className="py-2 flex flex-row items-center select-none">Use system theme
      <input onChange={handleChange} id={name} name={name} type="checkbox" value={isChecked}
             className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"/>
    </label>
  )
}

export default Checkbox