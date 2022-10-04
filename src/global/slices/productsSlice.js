import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"
import {uniq, sortBy} from "lodash"
import {loremIpsum} from "lorem-ipsum"
import {stringSimilarity as getSimScore } from "string-similarity-js"

const DEFALT_CATEGORIY = "All"
data.forEach(d => d.description = loremIpsum())

export const {actions, reducer} = createSlice({
    name: "products",
    initialState:{
        products: data, productsFromSearch: data,
        categories: [DEFALT_CATEGORIY, ...( uniq( data.map((product) => product.category))).sort()],
        selectedCategory: DEFALT_CATEGORIY,
        single: data[0], singleSimilarProducts: data.slice(0, 4),
        searchTerm: ""
    },
    reducers:{
      setSearchTerm(state, {payload:searchTerm}){
        //reset the navbar
        state.productsFromSearch = state.products
        state.selectedCategory = DEFALT_CATEGORIY
        //
       state.searchTerm = searchTerm
       if (searchTerm.length > 0) {
        state.productsFromSearch.forEach((p) => {
          p.simScore = getSimScore(`${p.name} ${p.category}`, searchTerm)
         })
         state.productsFromSearch = sortBy(state.productsFromSearch, "simScore").reverse()
       } else {
        //reset search
          state.productsFromSearch = state.products
       }
 
      },
      SetSelectedCategory(state, {payload: category}){
        state.searchTerm = ""
        state.selectedCategory = category
        state.productsFromSearch = state.products.filter((p) =>(
          (category === DEFALT_CATEGORIY ) ? true : (p.category === category)
        ))
      },
      setSingle(state, {payload:id}){
        const product = state.products.find((p)=>p.id === +id)
        state.single = product
        state.singleSimilarProducts = state.products.filter((p) => (
           (p.category === product.category) && (p.id !== product.id)
        ))
      }
         
    }
})