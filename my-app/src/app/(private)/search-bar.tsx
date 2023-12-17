import React, { ChangeEvent, useEffect, useState } from 'react'
import * as _ from "lodash"
import Post from '../component/post'
import User from '../component/user'
const SearchBar = () => {

   
    const [searchresult,setSearchresult] =useState([])

    const fetchSearcResults=async(searchText:string)=>{

      const res=await fetch(`/api/search?q=${searchText}`)

     if(res.ok){
      const json=await res.json()
      console.log(json)
      setSearchresult(json.data)
     }
    }
   
    const debounceFetchsearchResults=_.debounce(fetchSearcResults, 500)
    const handleChang=(e :ChangeEvent<HTMLInputElement>)=>{

      debounceFetchsearchResults(e.target.value)
    }
  return (
    <>
    <input type="text"  onChange={handleChang}
    placeholder='Search by username'
    className='p-2 bg-slate-200 border-none my-3 rounded-lg text-blue'  />
<ul>
    {searchresult && searchresult.map((user:UserI)=>(
      <li key={user.id} className='m-2'>
        <User user={user}/>
      </li>
    ))}
    </ul>
    
    </>
  )
}

export default SearchBar