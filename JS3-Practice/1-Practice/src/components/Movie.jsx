import React from 'react'

const Movie = (props) => {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <img src={props.image} alt={props.title} />
    </div>
  )
}

export default Movie