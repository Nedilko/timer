import {setLocalStorage, getLocalStorage} from './localStorageAdapter'
import {getDefaultSettings} from '../settings'

const LOCAL_STORAGE_KEY = 'settings'

const writeSettings = (value) => {
  setLocalStorage(LOCAL_STORAGE_KEY, JSON.stringify(value))
}

const loadSettings = () => {
  const data = getLocalStorage(LOCAL_STORAGE_KEY)
  if (!data) {
    writeSettings(getDefaultSettings())
    return getDefaultSettings()
  }

  return JSON.parse(data)
}

export {writeSettings, loadSettings}
