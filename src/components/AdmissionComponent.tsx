"use client";
import { useState } from "react";

export default function AdmissionComponent() {
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    phone: "",
    childName: "",
    childAge: "",
    previousSchool: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("/api/admission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Application submitted successfully!");
      setFormData({
        parentName: "",
        parentEmail: "",
        phone: "",
        childName: "",
        childAge: "",
        previousSchool: "",
        message: "",
      });
    } else {
      setStatus("❌ Failed to submit. Please try again.");
    }
  };

  return (
    <main className="min-h-screen max-w-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Open 2025/2026</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Give your child the best start in life. Enroll today at <span className="font-bold">MySchool</span> and secure a brighter future.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#apply"
            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Apply Now
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Visit
          </a>
        </div>
      </section>

      {/* Requirements
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Admission Requirements</h2>
          <ul className="space-y-4 text-lg">
            <li>📌 Completed Application Form</li>
            <li>📌 Copy of Birth Certificate / Age Declaration</li>
            <li>📌 Recent Passport Photographs</li>
            <li>📌 Previous School Report (if applicable)</li>
            <li>📌 Medical Record / Immunization Card</li>
          </ul>
        </div>
      </section> */}

      <div className="w-full p-8 rounded-xl shadow-lg my-5">
        <h1 className="text-3xl md:text-5xl text-amber-500 font-extrabold mb-6 text-center">Admission Application Form</h1>

        <h2 className="text-3xl font-bold my-4 text-center">
          Parent Or Guidean details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 my-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="parent Name"> Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="parentName"
                placeholder="Parent's Full Name"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full border border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="parent Email">Parent Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="parentEmail"
                placeholder="Parent's Email"
                value={formData.parentEmail}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
                required
              />
            </div>
            <div>
              <label htmlFor="parent Phone Number">Parent Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
                required
              />
            </div>

            {/* Student's Details */}
            <h2 className="text-3xl font-bold my-4 text-center sm:col-span-2 md:col-span-3">
              Student's details.
            </h2>

            <div>
              <label htmlFor="Child's Full Name">Child's Full Name<span className="text-red-500">*</span></label>

              <input
                type="text"
                name="childName"
                placeholder="Child's Full Name"
                value={formData.childName}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
                required
              />
            </div>
            <div>
              <label htmlFor="Child's DOB">Child's DOB<span className="text-red-500">*</span></label>

              <input
                type="date"
                name="childAge"
                placeholder="Child's Age"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
                required
              />
            </div>
            <div>
              <label htmlFor="Child's DOB">Nationality<span className="text-red-500">*</span></label>
              <input
                type="nationality"
                name="nationality"
                placeholder="Nationality"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
              />
            </div>
            <div>
              <div className="space-y-2 flex gap-4 items-center justify-center">
                <p className="font-medium text-gray-700">Gender:</p>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" value="male" className="text-blue-600 focus:ring-blue-500" />
                  <span>Male</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" value="female" className="text-blue-600 focus:ring-blue-500" />
                  <span>Female</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" value="other" className="text-blue-600 focus:ring-blue-500" />
                  <span>Other</span>
                </label>
              </div>

            </div>

            <h2 className="text-3xl font-bold my-4 text-center sm:col-span-2 md:col-span-3">
              Details of Previous School
            </h2>
            <div>
              <label htmlFor="Child's DOB">School Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="school"
                placeholder="School"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="Child's DOB">Year<span className="text-red-500">*</span></label>
              <input
                type="number"
                name="year"
                placeholder="Year"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="Child's DOB">Class<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="class"
                placeholder="Class"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="Child's DOB">Town/City<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="town"
                placeholder="Town/City"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
              />
            </div>

          </div>


          <textarea
            name="message"
            placeholder="Additional Information (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg  border-amber-200 outline-none focus:ring-amber-300 hover:ring-amber-300"
            rows={4}
          />

          <button
            type="submit"
            className="w-full  bg-amber-400 text-white py-3 rounded-lg font-bold hover:bg-amber-500 transition duration-500"
          >
            Submit Application
          </button>
        </form>

        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </div>
      <div className="h-20 w-full "></div>
    </main>
  );
}
