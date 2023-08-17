import React, { useState } from 'react'

import './todo.css'
import {Button, Input,Task} from '../../components'


const Todo = () => {
  const [text, setText] = useState()
  const [todo, setTodo] = useState([]);
  const handleCgange =(e) =>{
    setText(e.target.value);
  }
  const onAdd = (e) =>{
    setTodo([...todo, text]);
    setText("");
    e.preventDefault()
   
  }

  console.log(todo);
  return (
    <div>
        <form className="field" >

        <Input onChange={handleCgange} value={text}/>
        <Button text={'Создать'} onClick={onAdd} />
        </form>
        <Task/>
    </div>
  )
}

export default Todo