import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const bgLight = `bg-[url('./assets/light.svg')]`
const bgDark = `bg-[url('./assets/dark.svg')]`

ToggleSwitch.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
}

function ToggleSwitch({ isToggled, onChange }) {
  const [isOn, setIsOn] = useState(isToggled)
  const toggleHandler = () => {
    setIsOn((oldState) => !oldState)
  }

  useEffect(() => {
    onChange(isOn)
  }, [isOn])

  return (
    <span
      onClick={toggleHandler}
      className={`dark:bg-gray-6ex00 flex h-5 w-9 cursor-pointer appearance-none rounded-full bg-gray-100 ease-linear ${isOn ? 'bg-left' : 'bg-right'} ${isOn ? bgLight : bgDark} bg-contain bg-[length:20px] bg-no-repeat shadow-sm`}
    >
      <span
        className={`${
          isOn ? 'translate-x-full' : ''
        } m-0.5 h-4 w-4 rounded-full bg-gray-200
      transition duration-75 ease-linear dark:bg-gray-700`}
      ></span>
    </span>
  )
}

export default ToggleSwitch