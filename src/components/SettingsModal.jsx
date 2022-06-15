import {useState} from 'react'
import Modal from './Modal'
import Button from './Button'
import Select from './Select'
import Input from './Input'
import {settingsData} from '../settings'
import PropTypes from 'prop-types'

SettingsModal.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onApply: PropTypes.func
}

function SettingsModal({isOpen, onCancel, onApply}) {
  function handleApply() {
    console.log('applied settings and closed')
  }

  function handleClose() {
    console.log('closed modal')
  }

  return (
    <Modal isOpen={isOpen}>
      <div className='border-b border-gray-500 text-xl py-2'>Settings</div>
      <div className='flex flex-col py-2'>
        <Input label="Greetings text"/>
        <div className='flex flex-col'>
          <Select options={settingsData.days} label={'Day'}/>
          <Select options={settingsData.hours} label={'Hour'}/>
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