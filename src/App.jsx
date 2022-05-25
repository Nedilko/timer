import settingsIcon from './assets/settings.svg'
import ToggleSwitch from './components/ToggleSwitch'
import Countdown from './components/Countdown'
import { TARGET_DATE } from './settings'
import {useState} from "react";

function App() {
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
      <div className="mx-2 mt-5 flex max-h-[26rem] max-w-lg flex-col rounded-lg bg-gray-200 shadow-xl transition-colors duration-300 dark:bg-gray-800 lg:mx-auto">
        <header className="flex h-10 justify-between">
          <div className="cursor-pointer p-2">
            <img className="h-5 w-5 dark:invert" src={settingsIcon} alt="Settings" />
          </div>
          <div className="flex justify-center p-2">
            <ToggleSwitch onChange={toggleHandler} isOn={isOn} />
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
              <Countdown targetDate={TARGET_DATE} />
            </div>
          </div>
        </main>
        <footer className="p-2 text-center dark:text-cyan-50">
          <a href="#">some link</a>
        </footer>
      </div>
  )
}

export default App
