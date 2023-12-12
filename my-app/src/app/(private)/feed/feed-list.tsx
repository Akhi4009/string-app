import React from 'react'
import useSWR from 'swr'
import Post from './post'

const FeedList = ({index}:{index:Number}) => {

    const {data,error,isLoading} = useSWR(`/api/posts/feed?page=${index}`)
    console.log(data)
  return (
    <ul> 
       {data?.data.map((post :PostI)=>{
 return <li className='my-5' key={post.id}><Post post={post}/></li>
       })}
    </ul>
  )
}

export default FeedList