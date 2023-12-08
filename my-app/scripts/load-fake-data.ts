import { Client } from "pg";
import {loadEnvConfig} from "@next/env"

 const projectDir = process.cwd();
 loadEnvConfig(projectDir);

async function loadFakeData(numUsers = 10) {
  console.log(`Executing load fake data. Generating ${numUsers} users`);

  
  console.log(process.env.POSTGRES_USER);
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT!),
  });

  await client.connect();
  const res = await client.query("select 1");

   console.log(res); 
  await client.end();
}

loadFakeData();


