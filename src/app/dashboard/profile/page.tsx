"use client"

import { useEffect, useState } from "react"
import { Save } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"

interface Profile {
  id?: number
  full_name: string
  phone: string
  email: string
  address: string
  linkedin: string
  auth_id?: string // FK to Supabase Auth user
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    linkedin: "",
  })
  const [loading, setLoading] = useState(false)

  // Fetch profile of the logged-in user
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)

      // get current logged-in user
      const { data: userData, error: userError } = await supabase.auth.getUser()
      if (userError || !userData?.user) {
        console.error("No logged in user", userError)
        setLoading(false)
        return
      }

      const userId = userData.user.id

      // fetch user's profile
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("auth_id", userId) // filter by auth user id
        .single()

      if (error) {
        console.warn("No profile found, creating blank profile", error)
        setProfile({ ...profile, auth_id: userId, email: userData.user.email ?? "" })
      } else {
        setProfile(data)
      }

      setLoading(false)
    }

    fetchProfile()
  }, [profile])

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  // Save profile (update or insert if empty)
  const handleSave = async () => {
    if (!profile.auth_id) {
      alert("❌ Cannot save: no user ID found")
      return
    }

    setLoading(true)
    const { error } = await supabase.from("users").upsert(profile, { onConflict: "auth_id" })
    setLoading(false)

    if (error) {
      console.error("Error saving profile:", error)
      alert("❌ Failed to save profile")
    } else {
      alert("✅ Profile saved successfully!")
    }
  }

  return (
    <div className="bg-white dark:bg-neutral-800 shadow-md rounded-xl p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={profile.full_name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            disabled
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            value={profile.linkedin}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition flex justify-center items-center gap-2"
      >
        {loading ? "Saving..." : "Save Profile"} <Save className="w-5 h-5" />
      </button>
    </div>
  )
}
