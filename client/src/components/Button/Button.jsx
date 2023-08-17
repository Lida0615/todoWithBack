import React from 'react'
import './button.css'
import {Plus} from '../../assets/'

const Button = ({text,onClick }) => {
  return (
    <button onClick={onClick}  className={`btn `}>
        {text}
        <img src={Plus} alt="" />
    </button>
  )
}

export default Button