import React from 'react';
import Panel from './Panel'

function Modal() {
  return (
    <Panel>
      <header className='border-b border-gray-500 text-xl py-2'>Settings</header>
      <main className='flex flex-col py-2'>
          <span className='py-2'>Greetings text
            <input className='mx-1 px-1 rounded bg-gray-200' type="text" placeholder="put some text here"/>
          </span>
        <span>
            <span className='py-2'>Day
              <select className="rounded mx-1" name="" id="">
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
              </select>
            </span>

            <span className='py-2'>Hour
              <select className="rounded mx-1" name="" id="">
                <option value="0">00:00</option>
                <option value="1">01:00</option>
                <option value="23">23:00</option>
              </select>
            </span>
          </span>
        <span className='py-2'>Use system theme</span>
      </main>
      <footer className='flex border-t border-gray-500 justify-end  py-2'>
        <span className='px-2'>Apply</span>
        <span className='px-2'>Cancel</span>
      </footer>
    </Panel>
  )
}

export default Modal
