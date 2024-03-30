import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const OtherLayouts = ({children}) => {
  const [countries, setCountries] = useState([]);
  useEffect(() =>{
    getCountries()
    .then((data) => setCountries(data))
    .then((error) => console.error('Error while fetching country data:', error));
  }, []);
  return (
    <div>
      <NavBar />
      {React.Children.map(children,(child) =>
      React.cloneElement(child,{ countries})
       ) }
      {/* <Footer /> */}
    </div>
  )
}

export default OtherLayouts