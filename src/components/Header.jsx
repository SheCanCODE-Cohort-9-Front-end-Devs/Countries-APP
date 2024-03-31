import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <section className=' bg-header-background bg-repeat-x'>
        <NavBar />
        <div className=' flex flex-col items-center gap-8 text-white mt-10 mx-20 sm:mx-2'>
          <h1 className=' text-4xl'> <b>Country API App </b></h1>
          <p className=' flex text-center text-xl'>This is a simple app that allows you to search for countries and continents using the API.</p>
          <input type='text' placeholder='Search country by name' className=' text-black p-3 mb-10 md:w-5/12 sm:w-72'></input>
        </div>
    </section>
  )
}

export default Header