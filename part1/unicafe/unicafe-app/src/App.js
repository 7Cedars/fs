import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = (props) => {
  return (
      <tr>
        <td> {props.text} </td>
        <td> {props.value} </td>
      </tr>
  )
}

const Statistics = (props) => {
 
  let allRatings = props.good + props.neutral + props.bad
  let averagelRatings = (props.good +-(props.bad)) / allRatings
  let positiveRatings = props.good / allRatings

  if (allRatings === 0) {
    return (
      <div>
        No feedback has been given.  
      </div>
    )

  }

    return (
      <table>
        <tbody>
          <StatisticsLine text='Good' value={props.good} /> 
          <StatisticsLine text='Neutral' value={props.neutral} /> 
          <StatisticsLine text='Bad' value={props.bad} /> 
          <StatisticsLine text='All' value={allRatings} /> 
          <StatisticsLine text='Average' value={averagelRatings} /> 
          <StatisticsLine text='Positive' value={positiveRatings} /> 
        </tbody>
      </table>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>
        Give Feedback
      </h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>
        Statistics
      </h1>
      <Statistics 
          good = { good} 
          neutral = { neutral} 
          bad = { bad} 
       /> 

    </div>
  )
}

export default App