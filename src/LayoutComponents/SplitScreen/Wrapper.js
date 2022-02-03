import React from 'react'
import SplitScreen from './SplitScreen'

const Left = ({ name }) => {
  return <h1 style={{ backgroundColor: '#f4f4f4' }}>{name}</h1>
}
const Right = ({ message }) => {
  return <p>{message}</p>
}

const Wrapper = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <Left name={'Shawn'} />
      <Right message={'Hello World'} />
    </SplitScreen>
  )
}

export default Wrapper
