'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (

    <nav className="navbar z-100 bg-amber-600 rounded-b-2xl mb-5 h-15">
      <div className="wrapper">
        <div>
          <Link href="/">
            <Image src="/logo.jpg" alt="SAMCOS Logo" width={50} height={50} priority className='rounded-full flex justify-self-center w-auto h-auto' />
          </Link>
        </div>

        <div className="nav-wrapper">
          <input type="checkbox" id="toggler" ref={checkboxRef} />
          <div className="hamburger"><div></div></div>

          <div className="menu-wrapper">
            <div className="ul">
              <Link onClick={handleClick} href="/#about" className="hover:bg-amber-400 p-4 text-white">About Us</Link>
              <Link onClick={handleClick} href="/#anouncement" className="hover:bg-amber-400 p-4 text-white">Anouncements</Link>
              <Link onClick={handleClick} href="/#facilities" className="hover:bg-amber-400 p-4 text-white">Facilities</Link>
              <Link onClick={handleClick} href="/admin/dashboard" className="hover:bg-amber-400 p-4 text-white">Admin Dashboard</Link>
              <Link onClick={handleClick} href="/dashboard" className="hover:bg-amber-400 p-4 text-white">Portal</Link>
              <Link onClick={handleClick} href="/contact" className="hover:bg-amber-400 p-4 text-white">Contact</Link>
              <Link onClick={handleClick} href="/login" className="hover:bg-amber-400 p-4 text-white">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
