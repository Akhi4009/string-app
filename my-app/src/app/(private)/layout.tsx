"use client"
import { SWRConfig } from 'swr'

import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import fetcher from '../util/fetcher';
import SearchBar from './search-bar';



export default function PrivateLayout(
    {children}:{children:React.ReactNode;}){
        
        return(
            <SWRConfig value= {{fetcher:fetcher}} >
                
                <div className='sticky top-0 left-0 z-50'>
                <Header/>
                </div>
                
           
          
                
                  
            <div className='flex flex-col min-h-screen max-w-md  justify-center m-auto text-slate-400'>
                 
                
                <Navbar/>
                <SearchBar/> 
                <main className='w-full p-5 bg-slate-800 rounded-lg my-2'>{children}</main>
                <Footer/>
            </div>
            
           
    
                
                
          
            </SWRConfig>
         )
    }