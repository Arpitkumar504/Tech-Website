import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { useGlobalContext } from '../context/Context'

const Search = () => {
    const{query,searchpost}=useGlobalContext();
  return (
    <div className='container searchbox'>
      <h5 className='heading'>Tech News On The Go</h5>
      <div className="search">
        <input type="text" name='searchdata' placeholder='Search Here' value={query} onChange={(e)=>{searchpost(e.currentTarget.value)}}/>
        <BiSearch className='icon'/>
      </div>
    </div>
  )
}

export default Search
