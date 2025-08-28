'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const lecturers = [
  {
    id: 1,
    title: "HOD Maths & Comp Science",
    name: "Prof Adekunle Adeyelu",
    img: `/prof-adekunle-adeyelu.jpg`
  },
  {
    id: 2,
    title: "Not specified",
    name: "Dr Stephen Akuma",
    img: `/dr-stephen.jpg`
  },
  {
    id: 3,
    title: "Not specified",
    name: "Dr james pever",
    img: `https://images.unsplash.com/photo-1550543498-6dda84b0c9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGElMjBOaWdlcmlhbiUyMG1hbiUyMGluJTIwc3VpdGV8ZW58MHx8MHx8fDA%3D`
  },
]

const FacultyHighlight = () => {

  // Duplicate the content to create infinite loop effect
  const loopContent = [...lecturers, ...lecturers];

  const [hover, setHover] = useState(false)


  return (
    <div id="faculty" className="py-16 px-4 md:px-10 bg-gray-100 overflow-hidden">
      {/* ===== FACULTY HIGHLIGHT ===== */}
      <h2 className="text-3xl sm:text-2xl font-bold text-center mb-10">Meet Our <span className="border-b-8 pb-2 border-b-amber-300">Faculty</span> Lecturers</h2>
      <div className="flex animate-scroll space-x-6"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ animationPlayState: hover ? 'paused' : 'running' }}
      >

        {
          loopContent.map((lec, id) => (
            <div key={id} className="min-w-[320px] max-w-sm bg-white shadow-xl hover:shadow-lg border-amber-300 border rounded-2xl flex-shrink-0 flex flex-col justify-between gap-4 items-center text-center transition-all duration-500">
              <Image
                src={lec.img}
                alt="HOD"
                width={100}
                height={100}
                className="flex justify-self-center rounded-full my-4"
              />
              <div className="bg-amber-300 text-white w-full py-4 rounded-b-2xl">
                <h3 className="mt-4 font-semibold">{lec.name}</h3>
                <p className="text-gray-100 text-sm">{lec.title}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default FacultyHighlight