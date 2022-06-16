import {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import Button from './Button'
import Select from './Select'
import Input from './Input'
import {settingsData} from '../settings'
import {loadSettings} from '../utils/storageAdapter'

SettingsModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired
}

function SettingsModal({onCancel, onApply}) {
  const [settings, setSettings] = useState(loadSettings)
  const ref = useRef()

  const handleClick = () => {
    if (ref.current && !ref.current.contains(e.target)) {
      console.log('click outside')
    }
  }

  return (
    <Modal onClick={handleClick}>
      <div className='border-b border-gray-500 text-xl py-2'>Settings</div>
      <div className='flex flex-col py-2'>
        <Input label="Greetings text"/>
        <div className='flex flex-col'>
          <Select selected={settings.targetDate.days} options={settingsData.days} label={'Day'}/>
          <Select selected={settings.targetDate.hours} options={settingsData.hours} label={'Hour'}/>
        </div>
        <label className='py-2'>Use system theme</label>
      </div>
      <footer className='flex border-t border-gray-500 justify-end  py-2'>
        <Button title={'Apply'} onClick={onApply}/>
        <Button title={'Cancel'} onClick={onCancel}/>
      </footer>
    </Modal>
  )
}

export default SettingsModal