import settingsIcon from '../assets/settings.svg';
import { useState, useContext } from 'react';
import Icon from './Icon';
import SettingsModal from './SettingsModal';
import SettingsContext from '../state/Settings';

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { settings, handleApply } = useContext(SettingsContext);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const applyHandler = (data) => {
    handleApply(data);
    handleClose();
  };

  return (
    <>
      <Icon icon={settingsIcon} onClick={handleOpen} />
      {isModalOpen && (
        <SettingsModal
          settings={settings}
          isOpen={isModalOpen}
          onApply={applyHandler}
          onCancel={handleClose}
        />
      )}
    </>
  );
};

export default Settings;
