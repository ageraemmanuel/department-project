'use client'
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const data = [
  { name: "100L", students: 120 },
  { name: "200L", students: 95 },
  { name: "300L", students: 80 },
  { name: "400L", students: 70 },
];


const Admindashboard = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref')

  useEffect(() => {
    if (!ref || ref !== 'admin') {
      router.push("/login")
    }
  }, [ref, router])

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -500 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 4 }}
      className="flex-1 sm:p-6 p-2 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Total Students</h3>
          <p className="text-2xl font-bold">365</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Total Lecturers</h3>
          <p className="tet-2xl font-bold">25</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Courses</h3>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Pending Complaints</h3>
          <p className="text-2xl font-bold">20</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Students by Level</h3>
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
      </div>
    </motion.div>
  )
}

export default Admindashboard