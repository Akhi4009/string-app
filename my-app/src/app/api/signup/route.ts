import bcrypt from "bcrypt";
import { sql } from "../../../../db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const json = await request.json();

        const res = await sql(
            `select id, username from users where username ilike $1`,
            [json.username]
        );

        if (res.rowCount !== null && res.rowCount !== undefined && res.rowCount > 0) {
            return NextResponse.json({ error: "User already exists" });
        }

        const salt=10;
        const hash = await bcrypt.hash(json.password,salt)

        await sql(`insert into users (username,password) values($1,$2)`,
        [json.username,hash]);
       
        return NextResponse.json({msg:"Registeration success"},{status:201});
    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({error:"Server error",status:500})
    }
}