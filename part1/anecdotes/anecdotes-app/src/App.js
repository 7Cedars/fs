import { useState } from 'react'

// function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
// slightly adapted 
function getRandomInt() {
  return Math.floor(Math.random() * 6);
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const RenderAnecdote = ( {anecdotes, selected, votes} ) => {

  return (
    <h3> {anecdotes[selected]} (has {votes[selected]} votes ) </h3>
  )
}

const RenderTopAnecdote = ( {indexMax, votes, anecdotes}  ) => {

  // adapted from https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array.. 
  if (Math.max(...votes) === 0) {
    return (
      <h3> No votes cast yet </h3> 
    )
  }
  return (
    <h3> {anecdotes[indexMax]} (has {votes[indexMax]} votes ) </h3>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0)) 
  const [indexMax, setIndexMax] = useState(0) 

  const handleAnecdoteClick = () => {
    setSelected(getRandomInt())
  }

  const handleVoteClick = () => {
    let _votes = votes 
    let _indexMax = indexMax
    
    if (!_votes[selected]) {
      _votes[selected] = 1
    } else {
      _votes[selected] ++   
    } 

    // this one I got from https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array.. 
    _indexMax = votes.indexOf(Math.max(...votes)) 
    
    setVotes(_votes)
    setIndexMax(_indexMax)

  }

  return (
    <div>
      <h1> Anecdote of the Day </h1>
      {/* Why does the following not update on click?!  */}
      <RenderAnecdote selected = {selected} votes = {votes} anecdotes = {anecdotes} />   
      <Button handleClick={handleVoteClick} text='Vote!' />
      <Button handleClick={handleAnecdoteClick} text='Next Anecdote..' />
      <h1> Anecdote with most votes </h1>
      <RenderTopAnecdote indexMax = {indexMax} votes = {votes} anecdotes = {anecdotes}  />

    </div>
  )
}

export default App