import { User } from "@/app/types/user.type"


export async function getUser(): Promise<User | null> {
  const res = await fetch("/api/user", { cache: "no-store" })
  if (!res.ok) return null
  return res.json()
}
