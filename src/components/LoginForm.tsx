'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"



const LoginForm = () => {

  const router = useRouter()
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast("Processing please wait ...");

    try {
      const res = await fetch("/api/login", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok) {
        setFormData({
          userName: '', password: ''
        })
        toast(data.message);
        if (data.username === 'admin') {
          router.push("/admin?ref=admin");
        } else {
          router.push("/dashboard?ref=student");
        }
      } else {
        setFormData({
          userName: '', password: ''
        })
        toast(data.message)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="w-full py-20">
      <div className="max-w-2xl p-4 bg-gray-50 m-auto rounded-2xl shadow">
        <h1 className="text-center text-3xl font-bold">Welcome Back</h1>
        <p className="text-center text-gray-600 font-bold">Login to continue</p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="my-6">
            <label htmlFor="Username">Username: <span className="text-red-500">*</span></label>
            <input type="text"
              name="userName"
              onChange={handleChange}
              value={formData.userName}
              className="w-full p-4 mt-2 border border-amber-300 rounded-md outline-none hover:ring-amber-500"
              required
            />
          </div>
          <div className="my-6">
            <label htmlFor="Username">Password: <span className="text-red-500">*</span></label>
            <input type="text"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full p-4 mt-2 border border-amber-300 rounded-md outline-none hover:ring-amber-500"
              required
            />
          </div>
          <button type="submit" className="bg-amber-600 font-bold p-4 w-full rounded-md hover:bg-amber-500 text-2xl text-white transition-all duration-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm