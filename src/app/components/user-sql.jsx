import { sql } from "@vercel/postgres";

export default async function GetUser(params) {
  const products = await sql`SELECT * FROM user WHERE user_id = ${params.id}`;;
  console.log(products);
  return (products);
}