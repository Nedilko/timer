import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
}

function Button({onClick, title}) {
  return (
    <div className="select-none	cursor-pointer p-2 border-slate-600 rounded" onClick={onClick}>
      <span className='px-2'>{title}</span>
    </div>
  )
}

export default Button