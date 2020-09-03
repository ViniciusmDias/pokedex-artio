import React from 'react'
import { BsSearch } from "react-icons/bs";
import { HiMicrophone } from "react-icons/hi";

import './styles.sass'

const Search: React.FC = () => {
  return (
    <div className="search">
      <BsSearch />
      <input placeholder='Search' />
      <HiMicrophone />
    </div>
  )
}

export default Search
