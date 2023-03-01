import React from 'react'
import Style from './Navbar.module.css'

function Navbar(props) {

  const {scrollToRef} = props
  const {portfolioRef} = props
  const {aboutRef} = props

  return (
    <>
      <header className={Style.header}>
          <h1>CLΞMΞNT</h1>
          <nav>
              <ul>
                  <li onClick={() => scrollToRef(portfolioRef)}>Portfolio</li>
                  <li onClick={() => scrollToRef(aboutRef)}>About me</li>
                  <li onClick={() => scrollToRef(aboutRef)}>Contact</li>
              </ul>
          </nav>
      </header>
    </>
  )
}

export default Navbar