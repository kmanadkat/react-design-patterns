import axios from 'axios'
import React from 'react'

const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = React.useState(null)
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
      ;(async () => {
        const response = await axios.get('http://localhost:8000/users/' + userId)
        const currentUser = response.data
        setOriginalUser(currentUser)
        setUser(currentUser)
      })()
    }, [userId])

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes })
    }

    const onSaveUser = async () => {
      const response = await axios.post('http://localhost:8000/users/' + userId, { user })
      const currentUser = response.data
      setOriginalUser(currentUser)
      setUser(currentUser)
    }

    const onReset = async () => {
      setUser(originalUser)
    }

    return (
      <Component {...props} user={user} onChangeUser={onChangeUser} onSaveUser={onSaveUser} onResetUser={onReset} />
    )
  }
}

export default withEditableUser
