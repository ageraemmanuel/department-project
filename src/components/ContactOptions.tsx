'use client';
import { FaSearchLocation } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FiMail } from "react-icons/fi";




export default function MessageForm() {

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center bg-gray-50 min-h-screen max-w-screen px-3 overflow-hidden items-center py-16">

      <div className="mt-8">

        <div className="w-full flex flex-col justify-between gap-4 md:flex-row p-4 my-4">
          <div className="border hover:bg-amber-300 transition-all duration-700 min-w-2xs border-gray-300 rounded-xl p-4 my-2">
            <FaSearchLocation className="text-blue-600" size={30} />
            <h2 className="text-gray-950 my-2 font-bold">Our Location</h2>
            <p className="text-gray-600">123 MySchool Street, State, Nigeria</p>
          </div>
          <div className="border transition-all duration-700 min-w-2xs hover:bg-amber-300 border-gray-300 p-4 my-2 rounded-xl">
            <FiMail className="text-blue-600" size={30} />
            <h2 className="text-gray-950 my-2 font-bold">Send us an email</h2>
            <p className="text-gray-600">info@myschool.com</p>
          </div>
        </div>
      </div>
      <h2 className="text-gray-600 bg-white font-bold my-6 p-10 text-3xl md:text-5xl">
        Leave <span className="border-b-4 border-b-amber-300 pb-2">Use A </span>Message
      </h2>
      <p className="text-center text-2xl text-gray-500">And we will get back to you</p>
      <motion.div className="w-full max-w-3xl rounded-lg p-4 mt-6">

        <motion.form
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" space-y-4 text-gray-700">
          <input
            className="w-full border bg-white border-gray-50 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="fullname"
            placeholder="fullname*"
          />
          <input
            className="w-full border bg-white border-gray-50 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="phoneNumber"
            placeholder="phone number (optional)"
          />
          <input
            className="w-full border bg-white border-gray-50 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="email"
            placeholder="email*"
          />

          <select
            className="w-full bg-white border border-gray-50 rounded focus:outline-none focus:ring-blue-600 p-4 "
            name="category"
          >
            <option value="">Category</option>
            <option value="admission">Admissions</option>
            <option value="career">Careers</option>
            <option value="registral">registral</option>
            <option value="complaints">Complaints</option>
          </select>

          <textarea
            className="w-full min-h-40 border bg-white border-gray-50 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your message*"
            name="message"
          ></textarea>

          <motion.button
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            type="submit"
            className="w-full bg-amber-600 text-white p-3 rounded hover:bg-amber-700 transition duration-500 disabled:opacity-50 font-bold ">Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  )
}