import { NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

// ✅ must be an exported async function
export async function GET() {
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });

    await client.connect();

    const result = await client.query("SELECT NOW()");
    await client.end();

    return NextResponse.json({
      connected: true,
      time: result.rows[0].now,
    });
  } catch (err: any) {
    return NextResponse.json({
      connected: false,
      error: err.message,
    });
  }
}
