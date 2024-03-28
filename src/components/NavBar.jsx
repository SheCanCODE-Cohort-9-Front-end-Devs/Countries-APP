import React from 'react'

const NavBar = () => {
  return (
    <nav className = "bg-black text-white py-3 flex gap-10 " >
      <a href='https://tailwindcss.com/docs/guides/vite' > Tailwinf CSS with Vite</a>
      <a href='https://countriesapi-eric.netlify.app/?page=1' > Download new version</a>
      <a href='https://www.youtube.com/watch?v=2-crBg6wpp0&ab_channel=freeCodeCamp.org' > Github</a>
      <a href='https://github.com/sylvie013' > Oragnisation</a>
    </nav>
  );
}

export default NavBar