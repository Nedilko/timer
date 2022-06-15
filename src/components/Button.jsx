import PropTypes from 'prop-types'
import settingsIcon from '../assets/settings.svg'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  icon:  PropTypes.string
}

function addTitle(title) {
  if (title) {
    return <span className='px-2'>{title}</span>
  }
}

function addIcon(icon) {
  if (icon) {
    return <img className="h-5 w-5 dark:invert" src={icon} alt="Settings"/>
  }
}

function Button({onClick, title, icon}) {
  return (
    <div className="cursor-pointer p-2 border-slate-600 rounded" onClick={onClick}>
      {addIcon(icon)}
      {addTitle(title)}
    </div>
  )
}

export default Button