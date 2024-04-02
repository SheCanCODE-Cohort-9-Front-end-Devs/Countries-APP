import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-slate-100 flex items-center justify-around h-20 md:flex-row sm:flex-col'>
      <img className='w-40' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLBBku8PBaMUd1PyD3C155FbzyeBPwEUjM8UanwsNNhnckAScO'></img>
      <p className=' text-black' >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
