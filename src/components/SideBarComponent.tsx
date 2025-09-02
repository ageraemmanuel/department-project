'use client'
import { Home, Users, Book, Calendar, Settings, CalendarDays, } from "lucide-react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const SideBarComponent = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <div className="">
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(sidebarOpen ? false : true)}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>
      <aside className={`sticky z-1 top-15 left-0 w-64 h-screen bg-white shadow-lg p-4 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-2">
          <Link
            href={'/admin/dashboard?ref=admin'}
            className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
            <Home className="mr-2 h-4 w-4" /> Dashboard
          </Link>
          <Link
            href={"/admin/payments?ref=admin"}
            title="Check students payments and performance" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
            <Users className="mr-2 h-4 w-4" /> Manage Payments
          </Link>
          <Link
            href={"/admin/courses"}
            title="Upload or edit courses" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
            <Book className="mr-2 h-4 w-4" /> Courses
          </Link>
          <Link
            href={"/time-table"}
            title="Post or edit Timetable" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
            <Calendar className="mr-2 h-4 w-4" /> Timetable
          </Link>
          <Link
            href={"/events"}
            title="Go to Events" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
            <CalendarDays className="mr-2 h-4 w-4" />Manage Events
          </Link>
          <Link
            href={'/complaints'}
            title="view pending complaints" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
            <CalendarDays className="mr-2 h-4 w-4" /> Pending Complaints
          </Link>
          <Link
            href={'/settings'}
            title="Manage your personal profiles " className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Link>
        </nav>
      </aside>
    </div>

  )
}

export default SideBarComponent