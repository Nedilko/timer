import PropTypes from 'prop-types'

Panel.propTypes = {
  children: PropTypes.array,
}

function Panel({children}) {
  return (
    <div className='absolute backdrop-blur-sm w-full h-full flex items-center justify-center rounded-xl'>
      <div className='bg-gray-300 rounded-xl shadow-xl p-2'>
        {children}
      </div>
    </div>
)
}

export default Panel