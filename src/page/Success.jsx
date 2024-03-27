import Swal from 'sweetalert2';
import { useState, useMemo } from 'react';

export default function Success() {
    const [value, setValue] = useState('')
    const changeHandler = value => {
        setValue(value)
      }
        function handleClick() {Swal.fire({
          position: "center",
          icon: "success",
          title: "Booked",
          showConfirmButton: false,
          timer: 1500
        });
        
        }
    return (
        // <div className='flex item-center justify-center  bg-gray-200 bg-cover bg-center bg-no-repeat'>
        // <div className='relative flex flex-col  m-6 space-y-8 bg-green-500 opacity-90 shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
        // <div className='flex flex-col justify-center p-8 md:p-14'>
        //   <span className='mb-3 text-4xl font-bold'>Booked</span>
        // </div>
        // </div>
        // </div>
        <div className="flex items-center justify-center h-screen">
      <div className="p-4 rounded shadow-lg ring ring-indigo-600/50">
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-bold">Thank You !</h1>
          <p>Thank you for your interest! Check your email for a link to the guide.</p>
          <a
            href='/' className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-sm font-medium">
              Home
            </span>
          </a>
        </div>
      </div>
    </div>
    )
}