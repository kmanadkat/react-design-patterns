import axios from 'axios'
import React from 'react'

const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
      ;(async () => {
        const respose = await axios.get('http://localhost:8000/users/' + userId)
        const currentUser = respose.data
        setUser(currentUser)
      })()
    }, [userId])

    return <Component {...props} user={user} />
  }
}

export default withUser
