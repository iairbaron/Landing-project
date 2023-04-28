import React from 'react'
import buttonStyle from './buttonStyle.css'

const Button = (props) => {
  return (
    <button className={props.tipo}>{props.text}</button>
  )
}

export default Button