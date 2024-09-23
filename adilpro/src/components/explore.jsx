import React, { useState } from 'react'

export const Explore = () => {

  const [text, setText] = useState('')
  const [textToShow, setTextToShow] = useState('')

  const add = () =>{
    setTextToShow(text)
    setText('')
  }
  
  const deleteIt = () =>{
    setTextToShow('')
  }

  return (
    <div>
      <p className="font-semibold">what i wanna explore</p>

      <div className="my-5 space-x-5">
        <input 
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          className='bg-gray-300 p-3'
          
        />


        <button onClick={add} className='p-3 bg-green-400 hover:bg-green-200 rounded-md'>Add</button>
        <button onClick={deleteIt} className='p-3 bg-red-400 hover:bg-red-200 rounded-md'>Delete</button>
      </div>

      <p className="font-semibold">{textToShow}</p>

    </div>
  )
}

