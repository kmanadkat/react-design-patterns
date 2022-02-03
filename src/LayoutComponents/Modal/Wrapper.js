import LargePersonListItem from '../ListComponents/People/LargePersonListItem'
import RegularList from '../ListComponents/RegularList'
import Modal from './Modal'

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

const Wrapper = () => {
  return (
    <Modal>
      <RegularList items={people} resourceName='person' itemComponent={LargePersonListItem} />
    </Modal>
  )
}

export default Wrapper
