'use client'
import { courses } from "@/content.json";

const CoursesComponent = () => {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-semibold my-6 text-center text-amber-600">
        Courses to be registered
      </h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credit unit</th>
            <th>Reg Status</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map(cos => (
              <tr key={cos.id}>
                <td >{cos.id}</td>
                <td >{cos.Code}</td>
                <td >{cos.title}</td>
                <td >{cos.unit}</td>
                <td >{cos.type}</td>
                <td >{cos.status}</td>
                <td >
                  <button className="bg-amber-400 rounded-md p-2 text-white font-bold">
                    Registter
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default CoursesComponent