import React from 'react'
import {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0)
    const increment= () => {
    // har som uppgift att uppdatera värdet och säga åt react att rendera om komponenten
    
    //  setCount(count +1) 
    //   console.log(count)
      setCount((prevCount) =>prevCount +1 )
    }
    
      return (
        <div> 
    <h1>{count}</h1>
    <button onClick={increment}> increment</button>
    
        </div>
      )
}

export default Count