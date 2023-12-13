import { getJWTpayload } from "@/app/util/auth";
import { sql } from "../../../../db";
import { NextResponse } from "next/server";

// get Follows 


export async function GET(request:Request){
    const jwtPayload=await getJWTpayload();

    const {searchParams}= new URL(request.url);

    const userId=searchParams.get("user_id");

    const res = await sql(`select * from follows where user_id=$1 and follower_id=$2`,
    [userId,jwtPayload.sub]);

    return NextResponse.json({data:res.rows})

}


// create follows

export async function POST(request:Request){
    const json=await request.json();
    
    const jwtPayload=await getJWTpayload();
    
    const res=await sql(`select * from follows where user_id=$1 and follower_id=$2`,
    [json.user_id,jwtPayload.sub]);

    if(res.rowCount! > 0){
        return NextResponse.json({error:"already following"},{status:400});
    }

    await sql(`insert into follows (user_id, follower_id) values($1,$2)`,
    [json.user_id,jwtPayload.sub]);

    return NextResponse.json({"msg":"follow success"})
    
}