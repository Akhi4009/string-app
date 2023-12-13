import { NextResponse } from "next/server";
import { sql } from "../../../../db";

export async function GET(request:Request){

    const {searchParams} = new URL(request.url)
    const username=searchParams.get("username");

    console.log(username)

    if(!username){
        return NextResponse.json({error:"username filter required"},{status:400});
    };

    const statement=`select id, username, avatar from users where username=$1`;
    const res= await sql(statement,[username]);

    return NextResponse.json({data:res.rows});
}