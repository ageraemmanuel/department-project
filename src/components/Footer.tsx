import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p className="text-center py-4 border-top-4 border-yello-500">
        My school &copy; {new Date().getFullYear()} All right reserved
      </p>
    </footer>
  )
}

export default Footer