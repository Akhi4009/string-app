"use client"
import React from 'react'
import useSWR from 'swr'



const Header = () => {

  const {data,error,isLoading}=useSWR("/api/users/profile")

  if (error) return <div>Failed to load</div>;
  if(isLoading) return <div>loading...</div> ;

  console.log(data)
  return (
    <header>{data.data.username}</header>
  )
}

export default Header