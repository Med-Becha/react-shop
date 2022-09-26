import React from 'react'

const CategorySelector = () => {
  const title = "All"
  const categories = [ "Jackets", "Scarfs", "Gloves", "Hats", "Socks"]
  return (
    <div className="dropdown mb-3 mb-lg-0">
      <button className="btn btn-outline-success text-white dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
        {title}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {categories.map((category, i) =>(
            <li key={i}>
              <a href="#ggg" className='dropdown-item pointer'>{category}</a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default CategorySelector