"use client"

import useSWR, { useSWRConfig } from "swr";
import Form from "./form";
import PostContainer from "@/app/component/postContainer";


export default  function Profile(){

    const {data, error, isLoading} = useSWR("/api/users/profile");

    if(error) return <div>failed to load</div>;
    if(isLoading) return <div>loading...</div>
    // console.log(data)
    return ( 
        <>
        <h2 >Profile</h2>
        <Form/>
        <PostContainer username={data.data.username}/>
        </>
    )
}