// src/app/api/user/route.ts
import { NextResponse } from "next/server"
import { db } from "@/db/db"
import { users } from "../../../../drizzle/schema"
import { eq } from "drizzle-orm"

export async function GET() {
  try {
    // For now we fetch the first user (you can filter by auth_id later)
    const data = await db.select().from(users).limit(1)

    if (!data.length) {
      return NextResponse.json({ error: "No user found" }, { status: 404 })
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("❌ Error fetching user:", error)
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 })
  }
}
