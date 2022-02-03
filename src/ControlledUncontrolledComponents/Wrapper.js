import React from 'react'

import ControlledModal from './ControlledModal'
import ControlledOnboarding from './ControlledOnboarding'
import ControllledForm from './ControllledForm'
import UncontrolledForm from './UncontrolledForm'
import UncontrolledOnboarding from './UncontrolledOnboarding'

const StepOne = ({ goToNext }) => (
  <h3>
    Step 1 <button onClick={(_) => goToNext({ username: 'John Doe' })}>Next</button>
  </h3>
)
const StepTwo = ({ goToNext }) => (
  <h3>
    Step 2 <button onClick={(_) => goToNext({ age: 62 })}>Next</button>
  </h3>
)
const StepThree = ({ goToNext }) => (
  <h3>
    Step 3 <button onClick={(_) => goToNext({ title: 'SDE' })}>Next</button>
  </h3>
)

const StepDiscount = ({ goToNext }) => (
  <h3>
    Discount Applied! <button onClick={(_) => goToNext({ discount: 'applied' })}>Next</button>
  </h3>
)

const StepFour = ({ goToNext }) => (
  <h3>
    Step 4 <button onClick={(_) => goToNext({ hobby: 'skate' })}>Next</button>
  </h3>
)

const Wrapper = () => {
  const [isVisible, setIsVisble] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [userData, setUserData] = React.useState({})

  const onNext = (stepData) => {
    setUserData({ ...userData, ...stepData })
    setCurrentIndex(currentIndex + 1)
  }
  return (
    <>
      <h2>Uncontrolled Form</h2>
      <UncontrolledForm />

      <h2>Controlled Form</h2>
      <ControllledForm />

      <h2>Controlled Modal</h2>
      <button onClick={(_) => setIsVisble(!isVisible)}>Toggle Modal</button>
      <ControlledModal isVisible={isVisible} onRequestClose={(_) => setIsVisble(false)}>
        <h3>Hello World</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem facere amet exercitationem eaque! Sint eligendi
          repudiandae
        </p>
      </ControlledModal>

      <h2>Uncontrolled Onboarding</h2>
      <UncontrolledOnboarding
        onFinish={(data) => {
          console.log(data)
          alert('Onboarding Complete')
        }}>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </UncontrolledOnboarding>

      <h2>Controlled Onboarding</h2>
      <ControlledOnboarding onNext={onNext} currentIndex={currentIndex}>
        <StepOne />
        <StepTwo />
        {userData.age >= 60 && <StepDiscount />}
        <StepThree />
        <StepFour />
      </ControlledOnboarding>
    </>
  )
}

export default Wrapper
