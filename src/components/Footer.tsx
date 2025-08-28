import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-amber-300 text-white py-5 '>
      <p className="text-center py-4 font-bold ">
        &copy; {new Date().getFullYear()} Maths & Comp Science MOAUM All right reserved
      </p>
      <p className="text-center">
        Made with 💝 By computer science students
      </p>
    </footer>
  )
}

export default Footer