import React from 'react'

const NavBar = () => {
  return (
    <nav className = "text-white pt-9 px-20 flex justify-between sm:px-5" >
      <a href='#'> 
        <img className=' w-40 sm:hidden ' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLBBku8PBaMUd1PyD3C155FbzyeBPwEUjM8UanwsNNhnckAScO'></img>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
      </a>
      <a href='#' className=' hover:text-blue-500 sm:hidden' > Countries</a>
    </nav>
  );
}

export default NavBar