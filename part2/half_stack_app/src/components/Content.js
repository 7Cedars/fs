import React from 'react'
import Part from './Part'



const Content = ( {parts} ) => {
    
    // adapted from example at https://www.simplilearn.com/tutorials/javascript-tutorial/array-reduce-javascript#:~:text=The%20array%20reduce%20in%20JavaScript,is%20stored%20in%20the%20accumulator.    
    const total = parts.reduce(function (accumulator, part) {

        return accumulator + part.exercises
      
      }, 0)

    return (
        <div>
            <ul>     
            {parts.map(
                // part => console.log(part.name)
                part => <Part key={part.id} part={part} />
                )
            }
            <h3> Total of {total} Exercises </h3>
            </ul>
            
        </div>
    )
  }

export default Content