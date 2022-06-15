import {useState} from 'react'
import PropTypes from 'prop-types'

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
}

function Select({label, options}) {
  return (
    <label className='py-2'>{label}
      <select className="rounded mx-1" name="">
        {options.map((value, i) => <option key={i} value={i}>{value}</option>)}
      </select>
    </label>
  )
}

export default Select