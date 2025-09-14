import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { experience } from "../../../../drizzle/schema";
import { supabase } from "@/lib/supabaseClient";

// GET all experiences
export async function GET() {
  try {
    const data = await db.select().from(experience);
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error fetching experience:", error);
    return NextResponse.json({ error: "Failed to fetch experience" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Get current user from Supabase Auth
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ✅ Insert into DB
    const newExp = await db
      .insert(experience)
      .values({
        user_id: body.user_id, // make sure to pass user_id from frontend
        company: body.company,
        role: body.role,
        location: body.location,
        startDate: body.startDate,
        endDate: body.endDate,
        description: body.description,
      })
      .returning();

    return NextResponse.json(newExp[0]);
  } catch (error) {
    console.error("❌ Error adding experience:", error);
    return NextResponse.json({ error: "Failed to add experience" }, { status: 500 });
  }
}
