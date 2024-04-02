import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Countries = () => {
  return (
    <div className='md:m-24 flex justify-between md:flex-row sm:flex-col-reverse sm:m-6 h-44'>
      <div>
      <p className=' text-2xl'>View Countries</p>
      <p>page 1 of 5</p>
      </div>
      <p className='flex justify-center gap-2 items-center'>Select continent <IoMdArrowDropdown /> </p>
      </div>
  )
}

export default Countries