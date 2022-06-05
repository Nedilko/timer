import React, {useState} from 'react'
import ToggleSwitch from './ToggleSwitch'

function ThemeToggleSwitch() {
  const [isOn, setIsOn] = useState(true)
  const toggleHandler = () => {
    setIsOn((oldState) => !oldState)
    handleThemeChange(!isOn)
  }

  function handleThemeChange(isOn) {
    if (isOn) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <ToggleSwitch onChange={toggleHandler} isOn={isOn} />
  )
}

export default ThemeToggleSwitch