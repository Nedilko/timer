import {useState, useEffect} from 'react'
import ToggleSwitch from './ToggleSwitch'
import {getItem, setItem} from '../utils/storageUtils'
import {DEFAULT_SETTINGS} from '../settings'

function getTheme() {
  const theme = getItem('theme')

  if (theme) {
    return theme
  } else {
    return DEFAULT_SETTINGS.theme
  }
}

function ThemeToggleSwitch() {
  const [isLight, setIsLight] = useState(getTheme())
  const toggleHandler = () => {
    setIsLight((oldState) => !oldState)
    handleThemeChange(!isLight)
  }

  useEffect(() => {
    applyTheme(isLight)
  }, [])

  function handleThemeChange(isLight) {
    applyTheme(isLight)
    setItem('theme', isLight)
  }

  function applyTheme(isLight) {
    if (isLight) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <ToggleSwitch onChange={toggleHandler} isOn={isLight}/>
  )
}

export default ThemeToggleSwitch