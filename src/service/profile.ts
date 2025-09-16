import { Profile } from "@/app/types/profile.type"

// ✅ Fetch profile of logged-in user
export async function getProfile(token: string): Promise<Profile | null> {
  const res = await fetch("/api/profile", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`, // 🔑 attach Supabase JWT
    },
  })

  if (!res.ok) {
    console.error("❌ Failed to fetch profile:", await res.text())
    return null
  }

  return res.json()
}

// ✅ Save or update profile
export async function saveProfile(
  profile: Omit<Profile, "auth_id">,
  token: string
): Promise<Profile | null> {
  const res = await fetch("/api/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // 🔑 attach Supabase JWT
    },
    body: JSON.stringify(profile),
  })

  if (!res.ok) {
    console.error("❌ Failed to save profile:", await res.text())
    return null
  }

  return res.json()
}
