'use client'

const CTA = () => {
  return (
    <div className='max-w-screen flex justify-center items-center bg-amber-300 my-8 py-10'>
      <div>

        <h2 className="text-3xl text-center font-extrabold mb-4 text-gray-50">Ready to Apply?</h2>
        <p className="max-w-2xl mx-auto mb-6 font-bold text-center text-gray-50">
          Begin the journey to excellence for your child. Applications are now open for the {new Date().getFullYear() - 1}/{new Date().getFullYear()} academic session.
        </p>
        <a
          href="admission/apply"
          className="flex justify-self-center px-8 py-3 bg-gray-50 text-gray-800 rounded-lg font-semibold shadow hover:bg-gray-200 transition-all duration-300 "
        >
          Start Application
        </a>
      </div>
    </div>
  )
}

export default CTA