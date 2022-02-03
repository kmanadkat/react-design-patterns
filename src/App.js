import React from 'react'
import { BigSuccess, DangerButton } from './FunctionalProgramming/composition'
import { BigSuccessP, DangerButtonP } from './FunctionalProgramming/partiallyApply'
import RecursiveComponent from './FunctionalProgramming/RecursiveComponent'

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
}

const App = () => {
  return (
    <>
      <RecursiveComponent data={nestedObject} />
      <DangerButton text='dont!' />
      <BigSuccess text='YES!!' />

      <DangerButtonP text='OH NO!' />
      <BigSuccessP text='OH YES!' />
    </>
  )
}

export default App
