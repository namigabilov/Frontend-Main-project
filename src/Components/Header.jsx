import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'>HOME</Link>
        <Link to='/login'>Admin Panel</Link>
    </header>
  )
}

export default Header