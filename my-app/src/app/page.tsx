
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex  min-h-screen items-center justify-center ">
    <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg">
     <div className='text-center my-4'>
     <h1 className='text-white'>Strings</h1>
     </div>
     
      <div>
        <Link className='bg-slate-400 my-4 p-3 rounded-lg block text-center' href="/signin"> Sign In</Link>
      </div>
      <div>
        <Link className='bg-slate-400 p-3 my-4 rounded-lg block text-center' href="/signup">Sign Up</Link>
      </div>
     </div>
    </main>
  )
}
