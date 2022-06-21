import { useState, useContext } from 'react';
import SettingsContext from './state/Settings';
import ThemeToggleSwitch from './components/ThemeToggleSwitch';
import Countdown from './components/Countdown';
import Icon from './components/Icon';
import SettingsModal from './components/SettingsModal';
import settingsIcon from './assets/settings.svg';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenClose = () => {
    setIsModalOpen((oldState) => !oldState);
  };

  const { settings } = useContext(SettingsContext);

  return (
    <div className="flex w-full h-screen bg-gray-200 dark:bg-gray-800 transition-colors duration-300 justify-center items-center">
      <div className="mx-2 mt-5 flex max-h-[26rem] max-w-lg flex-col transition-colors duration-300 lg:mx-auto relative">
        <header className="flex h-10 justify-between">
          <Icon icon={settingsIcon} onClick={handleModalOpenClose} />
          {isModalOpen && (
            <SettingsModal
              isOpen={isModalOpen}
              onApply={() => console.log('applied')}
              onCancel={handleModalOpenClose}
            />
          )}
          <div className="flex justify-center p-2">
            <ThemeToggleSwitch />
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
              <Countdown targetDate={settings.targetDate} />
            </div>
          </div>
        </main>
        <footer className="p-2 text-center dark:text-cyan-50">
          <small>Developed by Andrii Haranin</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
