import {useState} from 'react'

const Name =()  => {

const [firstName, setFirstName] = useState('joakim')
const [lastName, setLastName] = useState('Wahlstöm')


const fullName = firstName +''+ lastName
  return (
    <>
    <button onClick={() => {
      setLastName('Fredriksson')
    }}>changeName</button>
    
    <p>{firstName}{lastName}</p>
    <p>{fullName}</p>
    </>
  )
}

export default Name