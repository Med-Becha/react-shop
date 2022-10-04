import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {actions as productsActions} from "../../global/slices/productsSlice"

const CategorySelector = () => {
   
  const {categories, selectedCategory/*, products, productsFromSearch*/} = useSelector(state =>state.products)
  // const categories = useSelector(state => state.products.categories)
  // const products = useSelector(state => state.products.categories)
  // const productsFromSearch = useSelector(state => state.products.categories)
  const dispatch = useDispatch()
  return (
    
    <div className="dropdown mb-3 mb-lg-0">
      <button className="btn btn-outline-success text-white dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
        {selectedCategory} 
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {categories.map((category, i) =>(
            <li
            onClick={() => dispatch(productsActions.SetSelectedCategory(category))}
            key={i}>
              <a href="#ggg" className='dropdown-item pointer'>{category}</a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default CategorySelector