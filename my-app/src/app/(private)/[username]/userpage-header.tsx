import React from 'react'
import useSWR, { mutate } from 'swr'

const UserPageHeader = ({username}:{username:string}) => {

  const {data:userData,error:userError,isLoading:userLoading} =useSWR(`/api/users?username=${username}`)

  const user=userData?.data[0]
  const {data:followData,error:followError,isLoading:followLoading} = useSWR(()=>`/api/follows?user_id=${user.id}`)

  if(userError || followError) return <div>...Failed to load</div>
  if(userLoading || followLoading) return <div>...loading</div>

  // console.log(userData,followData)

 
 

  const handleUnfollow=async()=>{

    const res = await fetch(`api/follows/${user.id}`,{
      method:"delete"
    })
    if(res.ok){

      mutate(`/api/follows?user_id=${user.id}`)
    }
  }

  const handleFollow=async()=>{

    const res = await fetch(`api/follows/`,{
      method:"post",
      body:JSON.stringify({user_id:user.id})
    })
    if(res.ok){
      mutate(`/api/follows?user_id=${user.id}`)
    }
  }
  return (
    <header>
        <div>
            <h1>
              {username}
            </h1>
            {followData.data.length > 0 ?(
              <button onClick={handleUnfollow}>Unfollow</button>
            ):(
              <button onClick={handleFollow}>Follow</button>
            )}
        </div>
    </header>
  )
}

export default UserPageHeader