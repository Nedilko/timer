import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Panel from "../Panels/Panel";
import OverlayBackground from "../OverlayBackgrounds/OverlayBackground";
import PropTypes from "prop-types";
import Button from "../../Buttons/Button";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

function Modal({ children, onApply, onCancel, title }) {
  const element = useRef(document.createElement("div"));

  useEffect(() => {
    const modalPortal = document.getElementById("modal-portal");
    const currentElement = element.current;

    modalPortal.appendChild(currentElement);

    return () => {
      modalPortal.removeChild(currentElement);
    };
  }, []);

  return createPortal(
    <OverlayBackground onClick={onCancel}>
      <Panel>
        <header role="modal" className="border-b border-gray-500 text-xl py-2">
          {title}
        </header>
        <main>{children}</main>
        <footer className="flex border-t border-gray-500 justify-end  py-2">
          <Button title={"Apply"} onClick={onApply} />
          <Button title={"Cancel"} onClick={onCancel} />
        </footer>
      </Panel>
    </OverlayBackground>,
    element.current
  );
}

export default Modal;
