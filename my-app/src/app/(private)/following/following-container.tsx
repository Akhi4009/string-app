
import React, { useState } from 'react'
import FollowingList from './followingList';

const FollowingContainer = () => {

    const [cnt,setCnt]=useState(1);
    const pages=[]
    for(let i=0;i<cnt;i++){
        pages.push(<FollowingList key={i} index={i}/>)
    }
  return (
    <div>
    {pages}

    <div className='flex flex-row justify-center'>
        <button 
        onClick={()=>setCnt(cnt+1)}
        className='bg-slate-300 p-2 rounded-lg'
        >Load More</button>
    </div>
    
    </div>
  )
}

export default FollowingContainer