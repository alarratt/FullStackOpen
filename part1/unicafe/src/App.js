import { useState } from 'react'

const Button = ({clickHandler, text}) => {
  return(
    <button onClick={clickHandler}>{text}</button>
  )
  }

const avg = (good, neutral, bad) => {
  if (good+bad+neutral === 0){
    return "No Ratings Yet"
  }
  else {
    return(
      ((good)-(bad))/(good+bad+neutral)
      )
  }
}

const percPos = (good, neutral, bad) => {
  if (good+neutral+bad===0){
    return ("No Ratings Yet")
  }
    else {
      return (good/(good+bad+neutral))
  }
}

const Statistics = ({good, neutral, bad}) => {
  if (good+bad+neutral===0){
    return(<div><p>No Feedback Given</p></div>)
  }
  else {
    return(
      <table>
        <tbody>

          <StatisticsLine text= 'Good' value = {good} />
          <StatisticsLine text= 'Neutral' value = {neutral} />
          <StatisticsLine text = 'Bad' value = {bad} />
          <StatisticsLine text ='All' value = {good+bad+neutral} />
          <StatisticsLine text ='Average' value = {Math.round(100*avg(good, neutral, bad))/100} />
          <StatisticsLine text ='Positive' value = {Math.round(10000*percPos(good,bad,neutral)/100)+"%"} />
        </tbody>
      </table>
    )
  }
}

const StatisticsLine = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give Us Feedback</h1>
      <Button clickHandler={()=>setGood(good+1)} text = "Good" />
      <Button clickHandler={()=> setNeutral(neutral+1)} text = "Neutral" />
      <Button clickHandler={()=> setBad(bad+1)} text = "Bad" />
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
 }

export default App