import {useState} from 'react';
import {getDefaultSettings} from './settings'
import {loadSettings} from './utils/storageAdapter'
import SettingsContext from './components/settingsContext'
import ThemeToggleSwitch from './components/ThemeToggleSwitch'
import Countdown from './components/Countdown'
import Panel from './components/Panel'
import Button from './components/Button'
import SettingsButton from './components/SettingsButton'
import SettingsModal from './components/SettingsModal'

function App() {
  const [GlobalSettings, setGlobalSettings] = useState(loadSettings())
  const [isOpen, setIsOpen] = useState(false)

  const handleModalOpenClose = () => {
    setIsOpen((oldState) => !oldState)
  }

  return (
    <SettingsContext.Provider value={{GlobalSettings, setGlobalSettings}}>
      <div className="flex w-full h-screen bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
        <div
          className="mx-2 mt-5 flex max-h-[26rem] max-w-lg flex-col transition-colors duration-300 lg:mx-auto relative">
          <header className="flex h-10 justify-between">
            <SettingsButton onClick={handleModalOpenClose}/>
            <div className="flex justify-center p-2">
              <ThemeToggleSwitch/>
            </div>
          </header>
          <main className="mb-auto bg-gray-200 py-4 transition-colors duration-300 dark:bg-gray-800 dark:text-cyan-50">
            <div className="flex flex-col">
              <div className="py-8 text-center text-3xl uppercase">
                weekends countdown
              </div>
              <div>
                <div className="py-5 text-center text-2xl uppercase">
                  time left to weekends
                </div>
                <Countdown targetDate={GlobalSettings.targetDate}/>
              </div>
            </div>
          </main>
          <footer className="p-2 text-center dark:text-cyan-50">
            <small>Developed by Andrii Haranin</small>
          </footer>
        </div>
      </div>
      <SettingsModal isOpen={isOpen} onCancel={handleModalOpenClose}/>
    </SettingsContext.Provider>
  )
}

export default App
