// src/app/api/profile/route.ts
import { NextResponse } from "next/server"
import { db } from "@/db/db"
import { users } from "../../../../drizzle/schema"
import { createClient } from "@supabase/supabase-js"
import { eq } from "drizzle-orm"

const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 🔑 service role key (not anon!)
)

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization")
  const token = authHeader?.replace("Bearer ", "")

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const {
    data: { user },
    error,
  } = await supabaseServer.auth.getUser(token)

  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const profile = await db
    .select()
    .from(users)
    .where(eq(users.auth_id, user.id))
    .limit(1)

  return NextResponse.json(profile[0] ?? {})
}
