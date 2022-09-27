import React from 'react'
import {useParams} from "react-router-dom"
import data from "../data"


const Single = () => {
  const {id} = useParams()
  const product = data.find((product) => product.id === +id)
  return (
    <div className="row ">
      <div className='col-6'>
        <img src={require(`../images/${product.id}.jpg`) } className="w-50" alt=':(' />
      </div>
      <div className='col-6'>
        <h2 className='user-select-none'>{product.name}</h2>
        <h3 className='user-select-none'>{product.price}</h3>
      </div>
    </div>
  )
}

export default Single