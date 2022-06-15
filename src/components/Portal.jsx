import {useLayoutEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'

Portal.propTypes = {
  children: PropTypes.object,
  wrapperId: PropTypes.string,
}

function Portal({children, wrapperId = "portal-wrapper"}) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let systemCreated = false;
    let element = document.getElementById(wrapperId);
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export default Portal