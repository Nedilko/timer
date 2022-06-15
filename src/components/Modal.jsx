import {useEffect} from 'react'
import Panel from './Panel'
import Portal from './Portal'
import OverlayBackground from './OverlayBackground'
import PropTypes from 'prop-types'

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

function Modal({children, isOpen}) {
  if (!isOpen) return null;

  return (
    <Portal wrapperId='portal-wrapper'>
      <OverlayBackground>
        <Panel>
          {children}
        </Panel>
      </OverlayBackground>
    </Portal>
  )
}

export default Modal
