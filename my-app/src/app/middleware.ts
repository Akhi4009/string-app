
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest){

    const pathname = request.nextUrl.pathname;
    // console.log(pathname)

    const authenticatedAPIRoutes = [
        pathname.startsWith('/api/users')
    ]

    // console.log(authenticatedAPIRoutes)

    if(authenticatedAPIRoutes.includes(true)){

        const cookie = request.cookies.get("jwt-token");
         console.log(cookie?.value)

        if(!cookie || cookie?.value ||cookie?.value === undefined){
          
        return NextResponse.json({error:"unauthenticated"},{status:401});
            
         }

         try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
            await jwtVerify(cookie.value,secret);
            
         } catch (error) {
            console.error(error)
            return NextResponse.json({error:"Internal server Error"},{status:5000});

         }

       
    }
}


 


export const config = {
   matcher: "/:path*", 
  };
