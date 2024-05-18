import React, {useState} from 'react'

export const WhereToForm = ({addWhereto}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (value){

        addWhereto(value)

        setValue("");
    }
};
  return (
    <form className='WhereTo' onSubmit={handleSubmit}>
        <input type="text" className="whereto-input" value={value} placeholder='Where are we going' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='whereto-btn'>Add Location</button>
    </form>
  )
}
