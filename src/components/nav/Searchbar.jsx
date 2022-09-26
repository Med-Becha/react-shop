import React from 'react'
import { useState } from 'react'

const Searchbar = () => {
  const [text, setText] = useState("")
  console.log(text)
  return (
    <form onSubmit={(e) =>e.preventDefault()} className="d-flex ms-md-0 ms-lg-3">
      <input type="text"
      placeholder='Search Products'
      onChange={(e) => {setText(e.target.value)}}
      className="form-control ms-md-auto me-2"
      />

    </form>
  )
}

export default Searchbar