"use client"

import { useRouter } from "next/navigation"
import React, { useState,FormEvent } from "react"



const Form = () => {

    const router=useRouter()
    const [username,setUsername] = useState<undefined | string>("")
    const [password,setPassword] = useState<undefined | string>("")
    const [confirmPassword,setConfirmPassword] = useState<undefined | string>("")

    const [error,setError]=useState<string[]>([])

    const handleSubmit=async(e:FormEvent)=>{
        
        e.preventDefault()

        if( password !=confirmPassword ){

            error.push("Password do not match!")
        }

        const res= await fetch("/api/signup",{
            method: "post",
           body: JSON.stringify({username,password})
        })

        // console.log(res)
        if(res.ok){
            router.push("/signin")
        }else{
            alert("Sign up failed")
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}
     className="flex flex-col gap-2 p-5 bg-slate-800 max-w-xs w-full rounded-lg">

<div  className="text-center">
    <h3 className="font-semibold text-white">Sign Up</h3>
</div>
<div className="my-3">
    <hr/>
</div>
<div className="flex flex-col gap-2 ">
    <label className="text-white">Username</label>
    <input  type="text" 
    placeholder="Username"
    id="username"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    required
    className="text-block p-2 border border-slate-400 rounded-lg"
    
    />
    </div>
    <div className="flex flex-col gap-2 ">
        <label className="text-white">Password</label>
        <input type="text"
         placeholder="Password" 
         id="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         required
         className="text-block p-2 border border-slate-400 rounded-lg"
         />
        </div>
        <div className="flex flex-col gap-2 ">
        <label className="text-white"> Confirm Password</label>
        <input type="text"
         placeholder="Password" 
         id="password"
         value={confirmPassword}
         onChange={(e)=>setConfirmPassword(e.target.value)}
         required
         className="text-block p-2 border border-slate-400 rounded-lg"
         />
        </div>
 <div className="flex flex-col gap-2 ">
    <button type="submit" className="bg-slate-400 p-3 mt-4  rounded-lg ">Signup</button>
 </div>
    </form>
    </>
  )
}

export default Form