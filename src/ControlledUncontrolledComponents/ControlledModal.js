import React from 'react'
import styled from 'styled-components'

const ControlledModal = ({ children, isVisible, onRequestClose }) => {
  return (
    <>
      {isVisible && (
        <ModalBackground onClick={onRequestClose}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={onRequestClose}>Close</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  )
}

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`

export default ControlledModal