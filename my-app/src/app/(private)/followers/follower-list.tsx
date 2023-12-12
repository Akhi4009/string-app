import User from '@/app/component/user';
import React from 'react'
import useSWR from 'swr'

const FollowerList = ({index}:{index:number}) => {

    const {data:userData} = useSWR(`/api/users/profile`);

    const {data:followerData} =useSWR(()=>`api/users/${userData.data.id}/follower?page=${index}`);

    if(!followerData)  return <div>loading...</div>
  return (
    <ul>
        {followerData.data.map((user:UserI)=>{
            return <li key={user.id} className='my-5 text-white'>
                <User user={user}/>
            </li>
        })}
    </ul>
  )
}

export default FollowerList