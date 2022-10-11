import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
 
  let allRatings = props.good + props.neutral + props.bad
  let averagelRatings = (props.good +-(props.bad)) / allRatings
  let positiveRatings = props.good / allRatings

    return (
      <div>
        All: {allRatings} <br />
        Average: {averagelRatings} <br />
        Positive: {positiveRatings} <br />
      </div>
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
      Good: {good} <br /> 
      Neutral: {neutral} <br />
      Bad: {bad} <br />
      <Statistics 
          good = { good} 
          neutral = { neutral} 
          bad = { bad} 
       /> 

    </div>
  )
}

export default App