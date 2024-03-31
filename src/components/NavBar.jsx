import React from 'react'

const NavBar = () => {
  return (
    <nav className = "text-white pt-9 px-20 flex justify-between " >
      <a href='#'> 
        <img className=' w-40 ' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLBBku8PBaMUd1PyD3C155FbzyeBPwEUjM8UanwsNNhnckAScO'></img>
      </a>
      <a href='#' className=' hover:text-blue-500 ' > Countries</a>
    </nav>
  );
}

export default NavBar