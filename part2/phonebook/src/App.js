import {useState} from 'react'

const App = () =>{
  const [personsm setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input />
        </div>
        <div>
          <button type = "submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App