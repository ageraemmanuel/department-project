'use client'
import { useState } from "react"
import { MdOutlinePayment } from "react-icons/md";

const PaymentButton = () => {
  const [display, setDisplay] = useState(false)

  return (

    <div className="min-h-40 shadow bg-white rounded-md cursor-pointer hover:bg-amber-200 transition-all duration-500 hover:translate-y-1 relative flex flex-col justify-center items-center gap-4 "
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <button

        className="flex flex-col justify-center items-center gap-4 "
      >
        <MdOutlinePayment className="text-4xl text-amber-500" />
        Pay Departmental fees
      </button>
      {
        display && (
          <div className="flex flex-col gap-4 w-full translate-y-15 bg-white shadow-2xl absolute bottom-0 p-4 transition-all duration-500 rounded-xl">
            <h3 className="mb-2 text-lg font-semibold  text-center ">
              <span className="border-b-4 border-b-amber-400">
                Select a fee
              </span></h3>
            <span className="border text-sm p-2 hover:bg-amber-400 border-amber-300 rounded-md">
              Departmental reg
            </span>
            <span className="border text-sm hover:bg-amber-400 border-amber-300 p-2 rounded-md">
              faculty reg
            </span>
            <span className="border text-sm p-2 hover:bg-amber-400 border-amber-300 rounded-md">
              SAMACOS dues
            </span>
          </div>
        )
      }
    </div>
  )
}

export default PaymentButton