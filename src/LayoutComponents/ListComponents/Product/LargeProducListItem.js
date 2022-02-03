import React from 'react'

const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product
  return (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <h4>Rating</h4>
      <p>{rating}</p>
    </>
  )
}

export default LargeProductListItem
