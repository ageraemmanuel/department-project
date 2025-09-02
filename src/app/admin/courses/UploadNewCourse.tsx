'use client'
import { useState } from "react"
import { toast } from "sonner";


const UploadNewCourse = () => {

  const [formData, setFormData] = useState({
    code: '',
    title: '',
    unit: '',
    level: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast("Processing please wait...")
    try {

      const res = await fetch("/api/course-upload", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({
          code: '',
          title: '',
          unit: '',
          level: ''
        })
        toast('Courses uploaded successful!')
      } else {
        toast(data.message || 'Failed to upload course please try again')
      }

    } catch (error) {
      toast(`An error occure: ${error} please try again!`)
    }
  }

  return (
    <div className="max-w-3xl bg-white shadow p-4 my-4">
      <h2 className="text-center my-4 text-amber-600 text-3xl">Upload New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="course code">Course Code:</label>
          <input type="text"
            required
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Course Code"
            className="w-full p-3 rounded-md border border-gray-200 outline-none focus:border-green-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="course code">Course Title:</label>
          <input type="text"
            required
            name="title"
            onChange={handleChange}
            value={formData.title}
            placeholder="Course Title"
            className="w-full p-3 rounded-md border border-gray-200 outline-none focus:border-green-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="course code">Course Unit:</label>
          <input type="text"
            name="unit"
            required
            onChange={handleChange}
            value={formData.unit}
            placeholder="Course Unit"
            className="w-full p-3 rounded-md border border-gray-200 outline-none focus:border-green-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="course code">Level:</label>
          <input type="text"
            name="level"
            required
            onChange={handleChange}
            value={formData.level}
            placeholder="Which Level"
            className="w-full p-3 rounded-md border border-gray-200 outline-none focus:border-green-400"
          />
        </div>
        <button className="bg-amber-400 w-full active:bg-amber-300 hover:translate-0.5 hover:bg-amber-500 text-white text-2xl transition-all duration-500 font-bold py-3 px-8 rounded-2xl">
          Upload
        </button>
      </form>

    </div>
  )
}

export default UploadNewCourse