import { useRouter } from "next/navigation"

const SignOutButton = () => {

    const router=useRouter()

    const handleSignOut=async()=>{

        const res= await fetch(`/api/logout`)
        if(res.ok){
            router.push("/signin")
        }
    }

    
  return (
    <>
    <button className="text-green-400 underline p-2 rounded-lg my-5" onClick={handleSignOut}>
        Sign Out
    </button>
    </>
  )
}

export default SignOutButton