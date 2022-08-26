import { useState } from 'react'

const Button = ({clickHandler, text}) => {
  return(
    <button onClick={clickHandler}>{text}</button>
  )
  }
const Display = ({text, value}) => (<p>{text}: {value}</p>)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodFeedback = () => setGood(good+1)
  const neutralFeedback = () => setNeutral(neutral+1)
  const badFeedback = () => setBad(bad+1)
  const avg = ({good, neutral, bad}) => {
    console.log(good, neutral, bad)
    return(
      ((good)+(bad))/(good+bad+neutral)
      )
    }
  
  console.log(good,bad,neutral)
  console.log(avg(good,bad,neutral))
  return (
    <div>
      <h1>Give Us Feedback</h1>
      <Button clickHandler={goodFeedback} text = "Good" />
      <Button clickHandler={neutralFeedback} text = "Neutral" />
      <Button clickHandler={badFeedback} text = "Bad" />
      <Display text= 'Good' value = {good} />
      <Display text= 'Neutral' value = {neutral} />
      <Display text= 'Bad' value = {bad} />
      <Display text ='All' value = {good+bad+neutral} />
      <Display text = 'Average' value = {avg(1,1,15)} />
      <p>{avg(1,1,15)}</p>
    </div>
  )
 }

export default App