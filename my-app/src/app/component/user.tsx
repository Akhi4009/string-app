import Image from 'next/image'
import Link from 'next/link'


const User = ({user,href}:{user:UserI,href?:string}) => {
  return (
    
    <div>
        <Link href={`/${href || user.username}`} className="flex flex-row gap-2  items-center">

        <div>
            {user?.avatar &&(
            <Image src={user.avatar} 
             width={50} height={50} 
            alt={user.username}
            className='rounded-full mr-3'/>
            )}

            {!user?.avatar && (
                <div style={{width:50,height:50}} 
                className='bg-slate-600 my-3 rounded-full'></div>
            )}
            </div>
            <div >{user?.username}</div>
           
        </Link>
    </div>
  )
}

export default User