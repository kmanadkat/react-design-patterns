import React from 'react'
import printProps from './printProps'
import UserInfo from './Components/UserInfo'
import withUser from './withUser'
import withEditableUser from './withEditableUser'
import UserInfoForm from './Components/UserInfoForm'
import withEditableResource from './withEditableResource'

const UserInfoWrapped = printProps(UserInfo)
const UserInfoLoaded = withUser(UserInfo, '234')
const UserInfoEditable = withEditableUser(UserInfoForm, '345')
const ResourceInfoEditable = withEditableResource(UserInfoForm, 'user', `http://localhost:8000/users/123`)

const Wrapper = () => {
  return (
    <>
      <UserInfoWrapped
        user={{
          id: '123',
          name: 'John Doe',
          age: 54,
          hairColor: 'brown',
          hobbies: ['swimming', 'bicycling', 'video games'],
        }}
      />
      <hr />
      <UserInfoLoaded />
      <hr />
      <UserInfoEditable />
      <hr />
      <ResourceInfoEditable />
    </>
  )
}

export default Wrapper
