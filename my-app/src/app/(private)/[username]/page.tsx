'use client'
import UserPageHeader from "./userpage-header";

export default function UserPage({params}:{params:{username:string}}){

   
    return (
        <div>
       
           <UserPageHeader  username={params?.username}/>
        
        <div>
             post container  {params.username}  
         </div>
        </div>
    )
}