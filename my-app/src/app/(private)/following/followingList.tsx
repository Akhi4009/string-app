import User from '@/app/component/user';
import React from 'react'
import useSWR from 'swr'

const followingList = ({index}:{index:number}) => {

    const {data:userData} = useSWR(`/api/users/profile`);

    const {data:followingData} =useSWR(()=>`api/users/${userData.data.id}/following?page=${index}`);

    if(!followingData)  return <div>loading...</div>
  return (
    <ul>
        {followingData.data.map((user:UserI)=>{
            return <li className='my-5 text-white'>
                <User user={user}/>
            </li>
        })}
    </ul>
  )
}

export default followingList