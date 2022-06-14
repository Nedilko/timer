import Panel from './Panel'
import PropTypes from 'prop-types'

Modal.propTypes = {
  content: PropTypes.any
}

function Modal({content}) {
  return (
    <Panel>
      {content}
    </Panel>
  )
}

export default Modal
