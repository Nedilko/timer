import {useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

function Input({name, label, placeholder = 'Greetings text', onChange}) {
  const refInput = useRef(null)
  const [value, setValue] = useState()
  const handleChange = (e) => {
    setValue(refInput.current.value)
  }

  useEffect(() => {
    const inputValue = {}
    inputValue[refInput.current.name] = value
    onChange(inputValue)
  }, [value])

  return (
    <label className='py-2 select-none'>{label}
      <input ref={refInput} name={name} onChange={handleChange} className='mx-1 px-1 rounded bg-gray-200' type="text"
             placeholder={placeholder}/>
    </label>
  )
}

export default Input