'use client'
import { FaBookOpenReader } from "react-icons/fa6"
import { IoMdLogOut } from "react-icons/io";
import { TbPasswordUser } from "react-icons/tb";
import DashboardEventSlider from "./DashboardEventSlider";
import { FaUser, FaWhatsapp } from "react-icons/fa";
import PaymentHistory from "./PaymentHistory";
import PaymentButton from "./PaymentButton";
import CoursesComponent from "./CoursesComponent";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { redirect, useSearchParams } from "next/navigation";



const ProfilePage = () => {
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref')
  if (!ref) redirect("/login")


  return (
    <div className="max-w-screen min-h-screen py-20 bg-gray-50">
      <div className=" sm:p-4 p-2 shadow ">
        <h1 className="mb-5 text-3xl sm:text-4xl font-extrabold text-center">Students Dashboard</h1>
        <h1 className="text-2xl my-10 shadow py-4 font-bold flex items-center">
          <FaUser size={70} className="mx-4" />
          Welcome Back Agera Emmanuel
        </h1>
        <div>
          <DashboardEventSlider />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          <PaymentButton />

          <button
            className="min-h-40 flex flex-col justify-center gap-4 items-center shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
            <FaBookOpenReader className="text-4xl text-amber-500 " />
            View Courses
          </button>
          <button
            title="complaints about exams, lectures etc"
            className="min-h-40 flex flex-col justify-center gap-4 items-center shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
            <FaBalanceScaleLeft className="text-4xl text-amber-400 " />
            Raise a complaints
          </button>
          <button
            className="min-h-40 flex flex-col justify-center gap-4 items-center shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
            <FaWhatsapp className="text-4xl text-green-500 " />
            Join WhatsApp Group
          </button>
          <button
            className="min-h-40  flex flex-col gap-4 justify-center items-center  shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
            <TbPasswordUser className="text-4xl text-amber-500" />
            Change Password
          </button>
          <button
            className="min-h-40 flex flex-col gap-4 justify-center items-center shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
            <IoMdLogOut className="text-4xl text-red-600" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-screen overflow-scroll p-4">
        <PaymentHistory />
      </div>
      <div className="max-w-screen overflow-scroll p-4">
        <CoursesComponent />
      </div>
    </div>
  )
}

export default ProfilePage