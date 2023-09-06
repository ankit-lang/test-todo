import React from 'react'
import { AiFillDelete, AiFillDiff } from "react-icons/ai";
import { updateTodo } from '../utils/HandleApi';
const Todocomponent = ({text,updateMode,deleteTodo}) => {
  return (
    <div>
      <div className="todo">
        <div className="text">
            {text}
        </div>
        <div className="icons">
        <AiFillDiff className='icon ' onClick={updateMode}/>
        <AiFillDelete className='icon '  onClick={deleteTodo}/>
        </div>
      </div>
    </div>
  )
}

export default Todocomponent
 