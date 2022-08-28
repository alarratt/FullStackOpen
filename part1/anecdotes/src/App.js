
import { useState } from 'react'
const Text = ({anecdote, vote}) => {
  return(
    <div>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of development time ...',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])
  const generateRand = () => {
    return(
    Math.floor(Math.random()*7)
    )
  }
  const voteFor = (selected) => {
    let votes = [...vote]
    votes[selected] = votes[selected]+1
    return(
      votes
    )
  }
  return(
    <div>
      <Text anecdote = {anecdotes[selected]} vote = {vote[selected]} />
      <div><button onClick = {()=>setSelected(generateRand)}>Next anecdote </button></div>
      <div><button onClick = {()=>setVote(voteFor(selected))}>Vote</button></div>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
    </div>
  )
}
export default App