import Panel from './Panel'

function Modal() {
  return (
    <Panel>
      <div className='border-b border-gray-500 text-xl py-2'>Settings</div>
      <div className='flex flex-col py-2'>
          <span className='py-2'>Greetings text
            <input className='mx-1 px-1 rounded bg-gray-200' type="text" placeholder="put some text here"/>
          </span>
        <div>
            <div className='py-2'>Day
              <select className="rounded mx-1" name="" id="">
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
              </select>
            </div>

            <div className='py-2'>Hour
              <select className="rounded mx-1" name="" id="">
                <option value="0">00:00</option>
                <option value="1">01:00</option>
                <option value="23">23:00</option>
              </select>
            </div>
          </div>
        <div className='py-2'>Use system theme</div>
      </div>
      <footer className='flex border-t border-gray-500 justify-end  py-2'>
        <span className='px-2'>Apply</span>
        <span className='px-2'>Cancel</span>
      </footer>
    </Panel>
  )
}

export default Modal
