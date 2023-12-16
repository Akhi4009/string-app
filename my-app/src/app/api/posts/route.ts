import { getJWTpayload } from "@/app/util/auth";
import { sql } from "../../../../db";
import { NextResponse } from "next/server";


export async function GET(request:Request){
   
    const jwtPayload = await getJWTpayload()

    const {searchParams} = new URL(request.url)
    const username = searchParams.get("username");
    const page = (searchParams.get("page") && parseInt(searchParams.get("page")!)) ||0
    const limit= 3;
    const offset = page*limit;

    const statement = `select p.*, u.username, u.avatar from posts p inner join users u on p.user_id = u.id where user_id =$1
    order by created_at desc limit $2 offset $3`;

    if(username){

        const userRes= await sql(`select * from users where username=$1`,
        [username]);

        if(userRes.rowCount===0){
            return NextResponse.json({error:"Not Found"},{status:404})
        }

        const user=userRes.rows[0]

        const postRes= sql(statement,[user.id, limit, offset])

        return NextResponse.json({data:(await postRes).rows})


    }

    const res = await sql(statement, [jwtPayload.sub, limit, offset])

    return NextResponse.json({data:res.rows},{status:200})

}

export async function POST(request:Request){

    const jwtPayload= await getJWTpayload()

    const json = await request.json();
    const content=json.content;
    // console.log(json)

    const res = await sql(`insert into posts (user_id, content) values ($1, $2) returning *`,
    [jwtPayload.sub,content]);

   return NextResponse.json({data:res.rows[0]},{status:201});
}