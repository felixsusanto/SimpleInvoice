import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  .shroud {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .modal {
    z-index: 2;
    display: block;
  }
`;

const Modal = props => {
  return (
    <ModalWrapper>
      <div className="shroud" />
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => props.onCloseModal()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            { (props.cta || props.close) && 
              <div className="modal-footer">
                { props.close && 
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => props.onCloseModal()}
                  >
                    Close
                  </button>
                }
                {props.cta}
              </div>
            }
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

Modal.defaultProps = {
  onCloseModal: () => {}
}

export default Modal;