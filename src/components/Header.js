import React from 'react'
import{ Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav-bar'>
      <Link to= '/'><img src='' alt='logo'/></Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/new-character'>New Character</Link>
    </nav>
  )
}

export default Header
