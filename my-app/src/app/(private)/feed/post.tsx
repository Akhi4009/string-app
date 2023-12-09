import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({post}:{post:PostI}) => {
    const options:Intl.DateTimeFormatOptions={
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric"
    }

    const created_at= new Date(post.created_at)
  return (
    <div className="flex flex-row text-slate-200">
        
            <div>
                {post.avatar &&(
                    <Link href={`/${post.username}`}>
                        <Image src={post.avatar}
                        width={50} height={50}
                        alt={post.username}
                        className='rounded-full mr-3'
                        />
                    </Link>
                )}
                {!post.avatar && (
                    <div style={{width:50,height:50}} className='bg-slate-400 rounded-full mr-3'></div>
                )}
            </div>
            <div className='flex flex-col max-w-xs'>

            <div>
                <Link className='font-semibold' href={`/${post.username}`}>{post.username}</Link>
            </div>
            <div className="text-slate-400">
                {created_at.toLocaleDateString('en-us',options)}
            </div>
            <div>
                {post.content}
            </div>
            </div>
        
    </div>
  )
}

export default Post