import PropTypes from 'prop-types'

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

function Icon({icon, onClick}) {
  return (
    <div className="cursor-pointer p-2 border-slate-600 rounded" onClick={onClick}>
      <img className="h-5 w-5 dark:invert" src={icon} alt="Settings"/>
    </div>
  )
}

export default Icon