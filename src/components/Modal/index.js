import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import Card from './styles/Card';

const Modal = ({ children, showModal, setModal }) => {
  const outerDiv = useRef();
  const innerDiv = useRef();

  useEffect(() => {
    if (showModal) {
      const outerEl = outerDiv.current;
      const innerEl = innerDiv.current;

      outerEl.onclick = e => {
        if (e.target.contains(innerEl)) {
          setModal(false);
        }
      };
    }
  }, [setModal, showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <Container ref={outerDiv}>
      <Card ref={innerDiv}>{children}</Card>
    </Container>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  setModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

Modal.defaultProps = {};

export default Modal;
