'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Home, Users, Book, Calendar, Settings, Megaphone, CalendarDays, } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


const data = [
  { name: "100L", students: 120 },
  { name: "200L", students: 95 },
  { name: "300L", students: 80 },
  { name: "400L", students: 70 },
];

// Simple reusable Card component
function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 md:flex mt-18">
      {/* Sidebar */}
      <div>
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(sidebarOpen ? false : true)}
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>
        <aside className={`w-64 h-screen bg-white shadow-lg p-4 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <h2 className="text-xl font-bold mb-6">Department Admin</h2>
          <nav className="space-y-2">
            <button className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </button>
            <button title="Check students performance" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <Users className="mr-2 h-4 w-4" /> Students
            </button>
            <button title="Upload or edit courses" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <Book className="mr-2 h-4 w-4" /> Courses
            </button>
            <button title="Post or edit Timetable" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <Calendar className="mr-2 h-4 w-4" /> Timetable
            </button>
            <button title="Go to Events" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <CalendarDays className="mr-2 h-4 w-4" /> Events
            </button>
            <button title="view pending complaints" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <CalendarDays className="mr-2 h-4 w-4" /> Pending Complaints
            </button>
            <button className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <Megaphone className="mr-2 h-4 w-4" /> Post Anouncement
            </button>
            <button title="Go to settings" className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-amber-400">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </button>
          </nav>
        </aside>
      </div>

      {/* Main Content */}
      <main className="flex-1 sm:p-6 p-2 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Card title="Total Students">
            <p className="text-2xl font-bold">365</p>
          </Card>
          <Card title="Total Lecturers">
            <p className="text-2xl font-bold">25</p>
          </Card>
          <Card title="Courses">
            <p className="text-2xl font-bold">42</p>
          </Card>
          <Card title="Pending Complaints">
            <Link className="text-blue-500" href="/admin" title="view students complaints">
              <p className="text-2xl font-bold">18</p>
            </Link>
          </Card>
        </div>

        {/* Chart */}
        <Card title="Students by Level">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </main>
    </div>
  );
}
