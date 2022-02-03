import React from 'react'
import styled from 'styled-components'

const Modal = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <button onClick={(_) => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <ModalBackground onClick={(_) => setShowModal(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={(_) => setShowModal(false)}>Close</button>
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

export default Modal
