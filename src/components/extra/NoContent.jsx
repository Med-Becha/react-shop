import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoContent = ({text="", btnText=''}) => {
let nav = useNavigate()
  return (
    <div className='text-white text-center my-5 mx-auto p-0 p-md-5 rounded'>
        <h2>{text}</h2>
        <button onClick={() =>nav("/")} className='btn btn-success btn-lg mt-3'>
        {btnText}
        </button>
    </div>
  )
}

export default NoContent