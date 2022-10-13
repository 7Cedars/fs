import { useState } from 'react'
import PersonsForm from './components/personForm'
import Persons from './components/persons'
// import Filter from './components/filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-7658-9484', id: 0 }, 
    { name: 'Seven Cedars', number: '555-6543-2234', id: 1 }, 
    { name: 'Arto Hellas', number: '555-4231-8767', id: 2 }, 
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personsToShow, setPersonsToShow] = useState([])

  const addPerson = (event) => {
    event.preventDefault()

    const entryObject = {
        name: newName,
        number: newNumber,
        id: persons.length ++ 
    }    

    persons.some(item => item.name === newName) ? 
        alert(`${newName} is already in the phonebook!`)
    : 
        setPersons(persons.concat(entryObject))
        setNewName("")
        setNewNumber("")
    }

  const handleFilterChange = (event) => {

    let _filteredPersons = persons.filter(person => 
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setPersonsToShow(_filteredPersons)
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
            <div>
                Filter: <input onChange={handleFilterChange} />
            </div>
        </form>
      <h2>Add a new entry:</h2>
        <PersonsForm 
          addPerson = {addPerson} 
          handleNameChange = {handleNameChange}
          handleNumberChange = {handleNumberChange}
          newName = {newName}
          newNumber = {newNumber}
         /> 
      <h2>Numbers in phonebook</h2>
        <Persons persons = {personsToShow}/> 
    </div>
  )
}

export default App