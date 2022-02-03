import React from 'react'

const ControlledForm = () => {
  const [nameInputError, setNameInputError] = React.useState('')
  const [name, setName] = React.useState('')
  const [age, setAge] = React.useState()
  const [hairColor, setHairColor] = React.useState('')

  React.useEffect(() => {
    if (name.length < 2) {
      setNameInputError('Name must be two or more characters')
    } else {
      setNameInputError('')
    }
  }, [name])

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input name='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input name='age' type='number' placeholder='Age' value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <input
        name='hairColor'
        type='text'
        placeholder='Hair Color'
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default ControlledForm
