import React from 'react'

const ControlledOnboarding = ({ children, currentIndex, onNext }) => {
  const currentChild = React.Children.toArray(children)[currentIndex]

  const goToNext = (data) => {
    onNext(data)
  }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  }

  return null
}

export default ControlledOnboarding
