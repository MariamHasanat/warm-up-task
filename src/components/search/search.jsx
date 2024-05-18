import React from 'react'
import { MagnifyingGlass } from "@phosphor-icons/react";
import './search.css'


const Search = () => {
  return (
    <div>
      <MagnifyingGlass size={20} color='#c7c3c3' />
      <input type="text" name="search" id="s1" placeholder='Find members' />
   
    </div>
  )
}

export default Search