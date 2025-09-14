import SideNav from "@/components/layout/sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <div className="flex min-h-screen">
      {/* Sidebar stays fixed */}
      <SideNav />

      {/* Page content updates per nav click */}
      <main className="flex-1 p-6 bg-slate-100 dark:bg-neutral-900">
        {children}
      </main>
    </div>
  )
}
