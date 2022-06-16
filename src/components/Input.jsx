import {useState} from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

function Input({label, placeholder = 'Greetings text'}) {
  const [value, setValue] = useState('')
  const handleChange = () => {
    setValue(event.target.value)
  }

  return (
    <label className='py-2'>{label}
      <input onChange={handleChange} className='mx-1 px-1 rounded bg-gray-200' type="text" placeholder={placeholder}/>
    </label>
  )
}

export default Input