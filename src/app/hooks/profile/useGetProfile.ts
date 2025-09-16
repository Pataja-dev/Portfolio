"use client"

import { useEffect, useState } from "react"
import { getProfile, saveProfile } from "@/service/profile"
import { Profile } from "@/app/types/profile.type"
import { supabase } from "@/lib/supabaseClient"

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        // ✅ Get current session
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (!session) {
          setError("Not authenticated")
          setLoading(false)
          return
        }

        // ✅ Fetch profile with token
        const data = await getProfile(session.access_token)
        setProfile(data)
      } catch (err: any) {
        console.error("❌ Failed to fetch profile:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const updateProfile = async (values: Omit<Profile, "auth_id">) => {
    setLoading(true)
    setError(null)

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) throw new Error("Not authenticated")

      // ✅ Save with token
      const updated = await saveProfile(values, session.access_token)
      setProfile(updated)
      return updated
    } catch (err: any) {
      console.error("❌ Failed to update profile:", err)
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { profile, loading, error, updateProfile }
}
