import React, { FunctionComponent } from "react";

interface ModalProps {
  handleClose: any;
  show: Boolean;
}

const Modal: FunctionComponent<ModalProps> = ({
  handleClose,
  show,
  children,
}) => {
  const showHideClassName = show ? "w3-modal w3-show" : "w3-modal w3-hide";

  return (
    <div id="id01" className={showHideClassName}>
      <div className="w3-modal-content">
        <div className="w3-container w3-margin">
          <span onClick={handleClose} className="w3-button w3-display-topright">
            &times;
          </span>
          <div className="w3-margin-top w3-margin-bottom">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
