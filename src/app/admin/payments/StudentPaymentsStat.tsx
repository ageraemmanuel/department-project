'use client'
import Link from 'next/link';
import StudentPaymentChart from './StudentPaymentChart';
import { MdOutlinePayment } from 'react-icons/md';
import { useState } from 'react';
import PaymentsHistory from './PaymentsHistory';
import NotPaidHistory from './NotPaidHistory';

const StudentPaymentsStat = () => {
  const [display, setDisplay] = useState('')

  return (
    <div className='max-w-screen min-h-screen overflow-hidden'>
      <div className="bg-gray-100 text-center py-10">
        <h1 className=' text-gray-600 text-2xl'>
          <Link href="/">Home</Link>
          <Link href="/admin/dashboard?ref=admin"> / Admin</Link> / Payments
        </h1>
      </div>

      <StudentPaymentChart />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-between">

        <button
          onClick={() => setDisplay('paid')}
          className="min-h-40 flex flex-col justify-center gap-4 items-center shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
          <a href="#display" className='w-full h-full flex flex-col justify-center gap-4 items-center'>
            <MdOutlinePayment className="text-4xl text-amber-500 " />
            Payment History
          </a>
        </button>

        <button
          onClick={() => setDisplay('npaid')}
          className="min-h-40 flex flex-col justify-center gap-4 items-center shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
          <a href="#display" className='w-full h-full flex flex-col justify-center gap-4 items-center'>
            <MdOutlinePayment className="text-4xl text-amber-500" />
            Yet Paid History
          </a>
        </button>
        <button
          className="min-h-40 flex flex-col justify-center gap-4 items-center shadow bg-white rounded-md cursor-pointer  hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 active:bg-amber-400">
          <MdOutlinePayment className="text-4xl text-amber-500 " />
          Pending Payments
        </button>
      </div>
      <section id='display'>
        {/* Payments History section */}
        {display === 'paid' && <PaymentsHistory />}

        {/* Yet to pay */}
        {display === 'npaid' && <NotPaidHistory />}
      </section>
    </div >
  )
}

export default StudentPaymentsStat