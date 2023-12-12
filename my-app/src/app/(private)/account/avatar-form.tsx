import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'

const AvatarForm = () => {

    const {data,error,isLoading} = useSWR(`/api/users/profile`)

    if(error) return <div>Failed to load</div>
    if (isLoading) return <div>loading...</div>

    const user =data.data
  return (
    <form>
       
        {user.avatar && (
            <div>
            <Image 
            src={user.avatar}
            alt={user.name}
            width={150}
            height={50}
            className='rounded-full m-auto my-5'
            />
            </div>
             )}

             {!user.avatar && (
                <div style={{width:150,height:150}} className='bg-slate-400 my-r m-auto rounded-full'>

                </div>
             )}
             <input type="file"/>
        
    </form>
  )
}

export default AvatarForm