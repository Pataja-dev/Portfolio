import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config(); // 👈 load .env

async function main() {
  const url = process.env.DATABASE_URL;
  console.log("🔌 Trying to connect to:", url);

  const pool = new Pool({ connectionString: url });

  try {
    const client = await pool.connect();
    console.log("✅ Connected to Supabase DB!");
    const result = await client.query("select now()");
    console.log("⏰ Server time:", result.rows[0]);
    client.release();
    await pool.end();
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
}

main();
