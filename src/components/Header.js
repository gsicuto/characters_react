import React from 'react'
import{ Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <img src='' alt='logo'/>
      <Link to='/characters'>Characters</Link>
      <Link to='/new-character'>New Character</Link>
    </nav>
  )
}

export default Header
