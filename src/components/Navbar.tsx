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

    <nav className="navbar bg-amber-300 rounded-b-2xl mb-5 h-15">
      <div className="wrapper">
        <div>
          <Link href="/">
            <Image src="/logo.jpg" alt="SAMCOS Logo" width={50} height={50} className='rounded-full' />
          </Link>
        </div>

        <div className="nav-wrapper">
          <input type="checkbox" id="toggler" ref={checkboxRef} />
          <div className="hamburger"><div></div></div>

          <div className="menu-wrapper">
            <div className="ul">
              <Link onClick={handleClick} href="/about" className="hover:bg-amber-400 p-4 text-white">About Us</Link>
              <Link onClick={handleClick} href="/services" className="hover:bg-amber-400 p-4 text-white">Academics</Link>
              <Link onClick={handleClick} href="/courses" className="hover:bg-amber-400 p-4 text-white">Portal</Link>
              <Link onClick={handleClick} href="/contact" className="hover:bg-amber-400 p-4 text-white">Contact</Link>
              <Link onClick={handleClick} href="/blog" className="hover:bg-amber-400 p-4 text-white">History</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
