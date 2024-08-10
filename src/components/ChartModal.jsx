import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 800px;
  margin: auto;
  position: relative;
  overflow: auto;
`;

const CloseButton = styled.button`
  background: #ff0000;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
`;

const ChartModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          padding: 0,
          inset: '10% auto auto 10%', // Ensure the modal is large enough
          width: '80vw', // Set a width
          height: '80vh', // Set a height
        },
      }}
      ariaHideApp={false}
    >
      <CloseButton onClick={onRequestClose}>Close</CloseButton>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default ChartModal;
