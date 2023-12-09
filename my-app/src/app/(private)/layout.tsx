"use client"
import { SWRConfig } from 'swr'

import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import fetcher from '../util/fetcher';

export default function PrivateLayout(
    {children}:{children:React.ReactNode;}){
        
        return(
            <SWRConfig value= {{fetcher:fetcher}}>
            <div>
                <Header/>
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </div>
            </SWRConfig>
         )
    }