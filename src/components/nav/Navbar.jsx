import React from 'react'
import { useNavigate } from 'react-router-dom'
import CategorySelector from './CategorySelector'
import Searchbar from './Searchbar'
import CartButton from './CartButton'

const Navbar = ({title}) => {
  const nav = useNavigate()
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top'>
      <div className='container-fluid px-md-5'>
        <span onClick={() => nav("/")} id='name' className='navbar-brand fw-bold pointer user-select-none'>
          {title}
        </span>
        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
          <CategorySelector/>
          <Searchbar/>
          <CartButton/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar