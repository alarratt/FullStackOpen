 const AddPerson = ({addPerson, newName, handleNameChange, newNum, handleNumChange}) =>
    <form onSubmit={addPerson}>
    <div>
    Name: <input 
    value={newName}
    onChange = {handleNameChange} />
    </div>
    <div>Number: <input 
    value={newNum}
    onChange = {handleNumChange} />
    </div>
    <button type = "submit">add</button>
    </form>
export default AddPerson