import {useState,FormEvent} from 'react'
import { useSWRConfig } from 'swr';

const Form = () => {

    const {mutate} =useSWRConfig();
    const [text,setText] = useState("");
    // console.log(text)

   const handleSubmit=async(e:FormEvent)=>{
   
    e.preventDefault()

    const res= await fetch(`/api/posts`,{
        method:"post",
        body:JSON.stringify({content:text})
    })
    

    if(res.ok){
        

        mutate((key)=> typeof key ==="string" && key.startsWith("/api/posts"))

        setText('');
        
    }
   

   }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <textarea
        className='bg-gray-500 p-2 rounded-lg w-full my-2'
        placeholder='What is happening?'
        onChange={(e)=>setText(e.target.value)}
        value={text}
        />
        <button type="submit" className='bg-slate-200 p-2 rounded-lg'>post</button>

        
    </form>
    </>
  )
}

export default Form