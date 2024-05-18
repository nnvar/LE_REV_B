import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Whereto = ({task, toggleComplete, deleteWhereto, editWhereto}) => {
  return (
    <div className='WhereTo'>
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editWhereto(task.id)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteWhereto(task.id)}></FontAwesomeIcon>
        </div>
    </div>
  )
}
