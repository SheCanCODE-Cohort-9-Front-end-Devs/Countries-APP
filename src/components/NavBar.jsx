import React from 'react'

const NavBar = () => {
  return (
    <nav className = "text-white pt-9 md:px-20 flex justify-between sm:px-5" >
      <a href='#'> 
        <img className=' w-40 ' src='navbar.png'></img>
      </a>
      <a href='#' className=' hover:text-blue-500' > Countries </a>
    </nav>
  );
}

export default NavBar