import {useState} from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

function Input({label, placeholder = 'Greetings text'}) {
  return (
    <label className='py-2'>{label}
      <input className='mx-1 px-1 rounded bg-gray-200' type="text" placeholder={placeholder}/>
    </label>
  )
}

export default Input