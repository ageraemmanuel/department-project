'use client'

import { useState } from "react"
import CoursesComponent from "./CoursesComponent";
import UploadNewCourse from "./UploadNewCourse";


const Display = () => {
  const [display, setDispaly] = useState('course');


  return (
    <div className="mt-4">
      <div className="flex gap-4">
        <button
          onClick={() => setDispaly('new')}
          className="text-2xl font-bold bg-amber-400 cursor-pointer hover:bg-amber-500 hover:translate-y-0.5 rounded-3xl py-2 px-8 text-white transition-all duration-500">Add Courses</button>
        <button
          onClick={() => setDispaly('course')}
          className="text-2xl font-bold bg-amber-400 cursor-pointer hover:bg-amber-500 hover:translate-y-0.5 rounded-3xl py-2 px-8 text-white transition-all duration-500">Courses table</button>
      </div>
      {display === 'course' && <CoursesComponent />}
      {display === 'new' && <UploadNewCourse />}
    </div>
  )
}

export default Display