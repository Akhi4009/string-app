import { NextResponse } from "next/server";

export async function GET(request:Request){

    const responce=NextResponse.json({msg:"logout success"});
    responce.cookies.set("jwt-token","");
    return responce;
}