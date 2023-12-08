import { Client } from "pg";
import {loadEnvConfig} from "@next/env"
import { faker } from "@faker-js/faker";

 const projectDir = process.cwd();
 loadEnvConfig(projectDir);

async function loadFakeData(numUsers = 10) {
  console.log(`Executing load fake data. Generating ${numUsers} users`);

  
 const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT!),
  });

  await client.connect();

  try {
    
    await client.query("begin")

    for(let i=0;i<numUsers;i++){
      await client.query(`insert into public.users (username, password, avatar) values ($1, $2, $3)`,
      
      [faker.internet.userName(), 'password', faker.image.avatar()]
      );
    };

    const res= await client.query(`select id from public.users order by created_at desc limit $1`,
    [numUsers]
    );

    console.log(res.rows)

    for(const row of res.rows){

      for(let i = 0; i < Math.ceil(Math.random()*50) ; i++){
        await client.query(`insert into public.posts(user_id,content) values($1, $2)`,
        [row.id,faker.lorem.sentence()])
      }
    }

    await client.query("commit")

  } catch (error) {
    
    await client.query("rollback")
    throw error
  } finally{
    await client.end()
  }
 
}
   
const numUsers=parseInt(process.argv[2]) || 10
console.log(`loading ${numUsers} fake users.`)
loadFakeData(numUsers);


