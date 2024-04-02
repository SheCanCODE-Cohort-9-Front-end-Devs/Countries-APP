import React from 'react'
import NavBar from './NavBar'
import { SectionHolder } from '../styled-components/GeneralComponents'

const Header = () => {
  return (
    <section>
        <NavBar />
        <h1>Country API App</h1>
        <p>This is a simple app that allows you to search for countries and continents using the API.</p>
    </section>
  )
}

export default Header