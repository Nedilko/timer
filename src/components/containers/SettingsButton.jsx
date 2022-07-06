import PropTypes from 'prop-types'
import Button from './Button'
import settingsIcon from '../assets/settings.svg'

SettingsButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

function SettingsButton({onClick}) {
  return (
    <Button icon={settingsIcon} onClick={onClick}/>
  )
}

export default SettingsButton