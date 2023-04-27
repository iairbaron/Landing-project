import React from 'react';
import cardStyle from './diferentes-card.css';

const DiferentesCard = (props) => {
  return (
    <div className='container'>
      <img src={props.icono} alt="" />
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default DiferentesCard