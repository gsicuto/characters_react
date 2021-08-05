import React from 'react'

const CharacterCard = (props) => {
  return (
    <div className='character-card'>
      <img src= 'https://i.pinimg.com/originals/66/c0/f3/66c0f3951cf18634e632c383284ab1f7.png' alt={props.name}/>
      <h3>{props.name}</h3>
      <p>{props.occupation}</p>
      <p>{props.weapon}</p>
      {props.cartoon ? '🦑' : '👎'}   
      <button>Delete</button>  
      <button>Edit</button>  
    </div>
  )
}

export default CharacterCard
