import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideModal } from '../../../redux/modal/modalActions';
import { getModalIsOpen } from '../../../redux/modal/modalSelectors';

import { CSSTransition } from 'react-transition-group';
import sprite from '../../../assets/symbol-defs.svg';
import Overlay from './ModalStyled';

const Modal = ({ children, hideModal, isOpen }) => {
  const onHadleClick = () => {
    hideModal();
  };

  return (
    <Overlay>
      <CSSTransition
        in={isOpen}
        appear={true}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="Modal">
          {children}
          <button className="modal_btn" onClick={onHadleClick} type="button">
            <svg className="modal_icon" width="24px" height="24px">
              <use href={sprite + '#clear'} />
            </svg>
          </button>
        </div>
      </CSSTransition>
    </Overlay>
  );
};

const mapStateToProps = state => {
  return {
    isOpen: getModalIsOpen(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => {
      dispatch(hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func,
  isOpen: PropTypes.bool,
};
