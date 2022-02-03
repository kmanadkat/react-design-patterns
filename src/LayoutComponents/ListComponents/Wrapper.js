import React from 'react'
import LargePersonListItem from './People/LargePersonListItem'
import SmallPersonListItem from './People/SmallPersonListIten'
import LargeProductListItem from './Product/LargeProducListItem'
import SmallProductListItem from './Product/SmallProductListIten'
import RegularList from './RegularList'

const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
]

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  },
]

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <div className='list-wrapper'>
        <h2>Small Person List</h2>
        <RegularList items={people} resourceName='person' itemComponent={SmallPersonListItem} />
        <h2>Large Person List</h2>
        <RegularList items={people} resourceName='person' itemComponent={LargePersonListItem} />
      </div>

      <div className='list-wrapper'>
        <h2>Small Product List</h2>
        <RegularList items={products} resourceName='product' itemComponent={SmallProductListItem} />
        <h2>Large Product List</h2>
        <RegularList items={products} resourceName='product' itemComponent={LargeProductListItem} />
      </div>
    </div>
  )
}

export default Wrapper
