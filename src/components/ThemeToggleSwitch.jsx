import {useState, useEffect, useContext} from 'react'
import ToggleSwitch from './ToggleSwitch'
import SettingsContext from './settingsContext'
import {writeSettings} from '../utils/storageAdapter'

function ThemeToggleSwitch() {
  const {GlobalSettings, setGlobalSettings} = useContext(SettingsContext)
  const [isLight, setIsLight] = useState(GlobalSettings.theme)

  const toggleHandler = () => {
    setIsLight((oldState) => !oldState)
    handleThemeChange(!isLight)
  }

  useEffect(() => {
    applyTheme(GlobalSettings.theme)
  }, [])

  const handleThemeChange = (isLight) => {
    applyTheme(isLight)
    writeSettings({
      ...GlobalSettings,
      theme: isLight
    })
  }

  const applyTheme = (isLight) => {
    if (isLight) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <ToggleSwitch onChange={toggleHandler} isOn={GlobalSettings.theme}/>
  )
}

export default ThemeToggleSwitch