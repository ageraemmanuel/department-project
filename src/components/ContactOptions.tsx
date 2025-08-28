'use client';
import { motion } from 'framer-motion';




export default function MessageForm() {

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center bg-gray-50 min-h-screen max-w-screen px-3 overflow-hidden items-center py-16">

      <h2 className="text-gray-600 bg-white font-bold my-6 p-10 text-3xl md:text-5xl">
        Leave <span className="border-b-4 border-b-amber-300 pb-2">Use A </span>Message
      </h2>
      <p className="text-center text-2xl text-gray-500">And we will get back to you</p>
      <motion.div className="w-full max-w-3xl rounded-lg p-4 my-6">

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
            <option value="">Message To</option>
            <option value="admission">HOD</option>
            <option value="career">Student Afairs</option>
            <option value="registral">General Enquiries</option>
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

      <iframe className="rounded-2xl my-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5766634739366!2d8.553344279345701!3d7.728485299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10508196ef175721%3A0xbc3c8568e0d3bf23!2sBenue%20State%20University%2C%20Makurdi!5e0!3m2!1sen!2sng!4v1756398783917!5m2!1sen!2sng" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </motion.section>
  )
}