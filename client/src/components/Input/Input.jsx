import React from 'react'
import './input.css'
const Input = ({onChange,value }) => {
  return (
    <>
    <input type='text' placeholder='Добавить новую задачу' onChange={onChange} value={value} />
    </>
  )
}

export default Input