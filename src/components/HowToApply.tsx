'use client'

import CTA from "./CTA"
import Question from "./Question"

const applicationSteps = [
  {
    id: 1,
    title: 'Contact Admissions office on:',
    content: `08000200284 to arrange a tour and make every enquiry regarding our school and its policies. `,
  },
  {
    id: 2,
    title: 'Submit The Form',
    content: `Complete the Pre-enrolment Form. Once we receive your application, we will contact you to schedule an admission test and interview for your child.`,
  },
  {
    id: 3,
    title: 'Pay the Application Fee:',
    content: `Pay the non-refundable application fee as indicated in the fee structure on our website. This fee covers the administrative costs associated with the application process.`,
  },
  {
    id: 4,
    title: 'Take Entrance Exam',
    content: `This step allows us to assess your child&apos;s readiness for our programs and better understand their individual academic needs.`,
  },
  {
    id: 5,
    title: 'Await Admission Decision',
    content: `Please note that a successful application is not a gurrantee of getting your child admitted after appication your child examine base on the test conditions if successful you will be notify`,
  },
  {
    id: 6,
    title: 'If Approved Complete Enrolment',
    content: `Once your child is accepted, complete the enrollment process, including payment of tuition fees, submission of additional required documents, and attending orientation sessions.`,
  },

]

const HowToApply = () => {
  return (
    <div className="min-h-screen max-w-screen">
      <h1 className="text-3xl text-center md:tex-5xl text-white bg-amber-500 font-extrabold py-16"><span className="border-b-4 pb-3 border-b-white">How To </span>How To Apply </h1>
      <p className="my-4 leading-relaxed max-w-3xl mx-auto">
        Welcome to <span className="font-bold text-amber-500">MySchool</span>, where we strive to provide an exceptional education and nurturing environment for your child&apos;s growth and development.
      </p>
      <p className="my-4 leading-relaxed max-w-3xl mx-auto">
        We are delighted that you are considering Cherryfield College for your child&apos;s education. This guide will walk you through the straightforward application process to join our vibrant community.
      </p>
      <h2 className="my-6 text-center text-amber-500 sm:text-3xl text-2xl font-bold"
      >
        <span className="border-b-4 border-b-amber-300 pb-4">Application</span>  Process
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 bg-gray-50 px-10 py-5">
        {
          applicationSteps.map(app => (
            <div key={app.id} className="bg-white hover:bg-amber-500 hover:text-white transition-all duration-500 rounded-xl flex flex-col items-center p-4 shadow">
              <h2 className="text-5xl w-20 h-20 my-4 rounded-full border-2 border-amber-300 p-4">{app.id}</h2>
              <h2 className="mb-4  font-bold">{app.title}</h2>
              <p className="leading-relaxed text-pretty">{app.content}</p>
            </div>
          ))

        }
      </div>

      {/* Call To Action */}
      <CTA />

      <Question />
    </div>
  )
}

export default HowToApply