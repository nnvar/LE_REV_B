import React, {useState} from 'react'

export const EditWhereto = ({editWhereto, task}) => {
    const [value, setValue] = useState(task.task);
    
    const handleSubmit = (e) => {
        // prevent default action
          e.preventDefault();
          // edit todo
          editWhereto(value, task.id);
        };

  return (
    <form className='WhereTo' onSubmit={handleSubmit}>
        <input type="text" className="whereto-input" value={value} placeholder='Update' onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit" className='whereto-btn'>Update</button>
    </form>
  )
}
