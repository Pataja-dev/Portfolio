"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LogOut, User, Briefcase, GraduationCap, Code, Wrench, Heart, Languages, Users } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}


const navItems: NavItem[] = [
  { label: "Profile", href: "/dashboard/profile", icon: <User className="w-5 h-5" /> },
  { label: "Experience", href: "/dashboard/experience", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Education", href: "/dashboard/education", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Projects", href: "/dashboard/projects", icon: <Code className="w-5 h-5" /> },
  { label: "Skills", href: "/dashboard/skills", icon: <Wrench className="w-5 h-5" /> },
  { label: "Interests", href: "/dashboard/interests", icon: <Heart className="w-5 h-5" /> },
  { label: "Languages", href: "/dashboard/languages", icon: <Languages className="w-5 h-5" /> },
  { label: "References", href: "/dashboard/references", icon: <Users className="w-5 h-5" /> },
]

export default function SideNav() {
  const pathname = usePathname()
  const router = useRouter()
const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
}


  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-8">CV Manager</h2>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? "bg-emerald-600" : "hover:bg-slate-700"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <button
        onClick={handleSignOut}
        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition mt-auto"
      >
        <LogOut className="w-5 h-5" />
        <span>Sign Out</span>
      </button>
    </aside>
  )
}
