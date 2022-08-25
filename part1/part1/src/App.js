import {useState} from 'react'

const Hello = (props) => {
  console.log("Hello from the other side.");
  return (
  <div>
    <p>Hello {props.name}. You are {props.age} years old.</p>
  </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text})=>(
<button onClick = {handleClick}>
  {text}
  </button>
)

//const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const App = () => {
  const name = "George"
  const age = 10
  const [allClicks, setAll] = useState([])
  const [left, setLeft]=useState(0)
  const [right, setRight]=useState(0)  

  const History = (props) => {
    if (props.allClicks.length===0){
      return(
        <div>
          The app is used by clicking the buttons
        </div>
      )
    }
    return(
      <div>
      Button press History: {props.allClicks.join(' ')}
      </div>
    )
  }

  const handleLeftClick =()=> {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }

  const handleRightClick=()=> {
    setAll(allClicks.concat('R'))
    setRight(right+1)

  }

  return (
    <div>
      <h1> Greetings</h1>
      debugger
      <Hello name="Jim" age = {23+10}/>
      <Hello name={name} age = {age} />
      <Button handleClick = {handleLeftClick} text = "Left" />
      <Button handleClick = {handleRightClick} text ="Right" />
      <History allClicks={allClicks} />
      <Display counter = "Fuck You" />
    </div>
  )
}

export default App