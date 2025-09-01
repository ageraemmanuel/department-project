'use client'
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from 'framer-motion'
import { redirect, useSearchParams } from "next/navigation";

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

const Admindashboard = () => {
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref')

  if (!ref || ref !== 'admin') redirect("/login")


  return (
    <motion.div
      initial={{ opacity: 0, translateX: -500 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 4 }}
      className="flex-1 sm:p-6 p-2 space-y-6">
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
    </motion.div>
  )
}

export default Admindashboard