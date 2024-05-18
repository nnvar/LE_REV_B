import React, {useState} from 'react'
import { WhereToForm } from './WhereToForm'
import { v4 as uuidv4 } from 'uuid';
import { Whereto } from './Whereto';
import { EditWhereto } from './Edit';
uuidv4();

export const WhereWrapper = () => {
    const [wheretos, setWheretos] = useState([]);

    const addWhereto = whereto => {
        setWheretos([...wheretos, {id: uuidv4(), task: whereto, complete: false, isEditing: false}])
        
    }
    const toggleComplete = id => {
        setWheretos(wheretos.map(whereto => whereto.id === id ? {...whereto, completed: !whereto.completed}: whereto))
    }

    const deleteWhereto = id => {
        setWheretos(wheretos.filter(whereto => whereto.id !== id))
    }

    const editWhereto = id => {
        setWheretos(wheretos.map((whereto) => whereto.id === id ? {...whereto, isEditing: !whereto.isEditing} : whereto));
    }

    const editTask = (task, id) => {
        setWheretos(wheretos.map(whereto => whereto.id === id ? {...whereto, task, isEditing: !whereto.isEdting} : whereto))}

  return (
    <div className='WheretoWrapper'>
        <h1>Let's Eat!</h1>
       <WhereToForm addWhereto={addWhereto}></WhereToForm> 
       {wheretos.map((whereto, index) => (
       whereto.isEditing ? (
            <EditWhereto editWhereto={editTask} task={whereto}></EditWhereto>
        ) : (
        <Whereto task={whereto} key={index} toggleComplete={toggleComplete} deleteWhereto={deleteWhereto} editWhereto={editWhereto}></Whereto>
        )
       ))}
       
    </div>
  )
}
