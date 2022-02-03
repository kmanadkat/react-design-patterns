import React from 'react'

const UncontrolledOnboarding = ({ children, onFinish }) => {
  const [onBoardingData, setOnBoardingData] = React.useState({})
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const currentChild = React.Children.toArray(children)[currentIndex]

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1
    const updateData = {
      ...onBoardingData,
      ...stepData,
    }
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex)
    } else {
      onFinish(updateData)
    }
    setOnBoardingData(updateData)
  }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  }

  return null
}

export default UncontrolledOnboarding
