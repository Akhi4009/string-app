'use client'
import PostContainer from "@/app/component/postContainer";
import UserPageHeader from "./userpage-header";

export default function UserPage({params}:{params:{username:string}}){

   
    return (
        <>
       <UserPageHeader  username={params?.username}/>
        <PostContainer username={params.username}/>
        </>
    )
}