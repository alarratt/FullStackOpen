const Hello = (props) => {
  console.log("Hello from the other side.");
  return (
  <div>
    <p>Hello {props.name}. You are {props.age} years old.</p>
  </div>
  )
}

const App = () => {
  const name = "George"
  const age = 10
  
  return (
    <div>
      <h1> Greetings</h1>
      <Hello name="Jim" age = {23+10}/>
      <Hello name={name} age = {age} />
    </div>
  )
}

export default App