import {useState} from 'react'
import Filter from './Components/Filter'
import AddPerson from './Components/AddPerson'
import PhoneBook from './Components/PhoneBook'

const App = () =>{
  const [persons, setPersons] = useState([{name: 'Arto Hellas', number: "040-123456"}])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNum
    }
    if(persons.findIndex(x => x.name === newName)===-1){
      setPersons(persons.concat(personObject))
    }
    else{alert(`${newName} is already in the records.`)}
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterCO = {filter} filterByNameCO = {handleFilterChange}/>
      <AddPerson addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange} newNum = {newNum} handleNumChange = {handleNumChange} />
      <h2>Numbers</h2>
      <PhoneBook persons={persons} filter = {filter}/>
    </div>
  )
}
export default App