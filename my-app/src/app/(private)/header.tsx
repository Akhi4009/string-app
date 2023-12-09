"use client"
import React from 'react'
import useSWR from 'swr'
import User from '../component/user'



const Header = () => {

  const {data,error,isLoading}=useSWR("/api/users/profile")

  if (error) return <div>Failed to load</div>;
  if(isLoading) return <div>loading...</div> ;

  console.log(data)
  return (
    <header className='flex flex-row w-full p-5 bg-slate-800 rounded-lg my-2 justify-between items-center text-white'>
      <div>
        <h1 className="font-mono text-lg ">Strings</h1>
      </div>
      <div>
        <User user={data.data} href="account"/>
      </div>
      
    </header>
  )
}

export default Header