// src/db/db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // 👈 Required for Supabase
});

export const db = drizzle(pool);
// Now you can import `db` from this file and use it in your application