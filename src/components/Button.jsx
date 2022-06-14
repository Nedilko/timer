import PropTypes from 'prop-types'
import settingsIcon from '../assets/settings.svg'

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

function Button({onClick}) {
  return (
    <div className="cursor-pointer p-2" onClick={onClick}>
      <img className="h-5 w-5 dark:invert" src={settingsIcon} alt="Settings"/>
    </div>
  )
}

export default Button