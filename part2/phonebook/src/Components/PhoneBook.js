
const PhoneBook = ({persons, filter}) =>{
    const dataToShow = persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase()))
    return(
    <div>{dataToShow.map(person => <p key = {person.name}> {person.name} : {person.number}</p> )}
    </div>)
}

export default PhoneBook