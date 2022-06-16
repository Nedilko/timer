import {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import Panel from './Panel'
import OverlayBackground from './OverlayBackground'
import PropTypes from 'prop-types'

Modal.propTypes = {
  children: PropTypes.any.isRequired,
}

function Modal({children}) {
  const element = useRef(document.createElement('div'))
  useEffect(() => {
    const modalPortal = document.getElementById('modal-portal')
    const currentElement = element.current

    modalPortal.appendChild(currentElement)

    return () => {
      modalPortal.removeChild(currentElement)
    }
  }, [])

  return createPortal(
    <OverlayBackground>
      <Panel>
        {children}
      </Panel>
    </OverlayBackground>,
    element.current
  )
}

export default Modal
