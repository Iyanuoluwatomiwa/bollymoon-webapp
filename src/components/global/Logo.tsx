import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.webp'
import React from 'react'

function Logo() {
  return (
    <Link to="/" className="flex items-center text-primary text-xl">
      <img src={logo} alt="logo" width={100} height={48} />
    </Link>
  )
}
export default React.memo(Logo)
