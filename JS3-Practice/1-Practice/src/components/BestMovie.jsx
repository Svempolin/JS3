import React from 'react'
import Movie from './Movie'

const BestMovie = (props) => {
  return (
    <div className='card'>
        {props.items.map(item=> (
            <Movie
            key={item.id}
            title={item.title}
            author={item.author}
            image={item.image}
            
            />
        ))}
    </div>
  )
}

export default BestMovie