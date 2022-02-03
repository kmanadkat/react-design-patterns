import React from 'react'

const SmallProductListItem = ({ product }) => {
  const { name, price } = product
  return (
    <p>
      Name: {name}, Price: {price}
    </p>
  )
}

export default SmallProductListItem
