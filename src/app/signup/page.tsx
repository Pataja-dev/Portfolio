"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignup = async (e: React.FormEvent) => {
    // e.preventDefault()
    // setLoading(true)
    // setError(null)

    // // Step 1: sign up user in Supabase Auth
    // const { data, error } = await supabase.auth.signUp({
    //   email,
    //   password,
    // })

    // if (error) {
    //   setError(error.message)
    //   setLoading(false)
    //   return
    // }

    // const user = data?.user
    // if (user) {
    //   // Step 2: create a matching row in the "users" table
    //   const { error: dbError } = await supabase.from("users").insert({
    //     auth_id: user.id,
    //     email: user.email,
    //     full_name: "", // empty, will be edited in Profile page
    //     phone: "",
    //     address: "",
    //     linkedin: "",
    //   })

    //   if (dbError) {
    //     console.error("Error inserting user profile:", dbError)
    //   }
    // }

    // setLoading(false)
    // alert("✅ Check your email for confirmation link!")
    alert("What are you doing here? Signup is disabled for now.")
    router.push("/login") // redirect to login page after signup
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  )
}
