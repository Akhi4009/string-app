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
            <SWRConfig value= {{fetcher:fetcher}}>
            <div className='flex flex-col min-h-screen max-w-md items-center justify-center m-auto '>
                <SearchBar/>
                <Header/>
                <Navbar/>
                <main className='w-full p-5 bg-slate-800 rounded-lg my-2'>{children}</main>
                <Footer/>
            </div>
            </SWRConfig>
         )
    }