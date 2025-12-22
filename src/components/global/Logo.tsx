import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.webp'
import React from 'react'

function Logo({ size }: { size?: string }) {
  return (
    <Link to="/" className="flex items-center text-primary text-xl">
      <img src={logo} alt="logo" className={`${size || 'h-[34px]'} w-auto`} />
    </Link>
  )
}
export default React.memo(Logo)
