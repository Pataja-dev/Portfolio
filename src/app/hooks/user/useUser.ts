// src/hooks/useUser.ts
"use client"

import { User } from "@/app/types/user.type"
import { getUser } from "@/service/user"
import { useEffect, useState } from "react"

export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      const data = await getUser()
      setUser(data)
      setLoading(false)
    }
    fetchUser()
  }, [])

  return { user, loadingUser }
}
