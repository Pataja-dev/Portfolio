"use client"

import { Save } from "lucide-react"
import {  useProfile } from "@/app/hooks/profile/useGetProfile"

export default function ProfilePage() {
  const { profile, loading, updateProfile } = useProfile()

  if (loading && !profile) {
    return <p className="text-center">Loading profile...</p>
  }

  if (!profile) {
    return <p className="text-center">No profile found</p>
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white dark:bg-neutral-800 shadow-md rounded-xl p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="space-y-4">
        {["full_name", "phone", "address", "linkedin"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-semibold capitalize">
              {field.replace("_", " ")}
            </label>
            <input
              type="text"
              name={field}
              value={(profile as any)[field]}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            value={profile.email}
            disabled
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400"
          />
        </div>
      </div>

      <button
        onClick={() => updateProfile(profile)}
        disabled={loading}
        className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition flex justify-center items-center gap-2"
      >
        {loading ? "Saving..." : "Save Profile"} <Save className="w-5 h-5" />
      </button>
    </div>
  )
}
