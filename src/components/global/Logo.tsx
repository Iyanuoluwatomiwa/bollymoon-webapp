import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="flex items-center text-primary text-xl">
      <span className={`font-bold`}>BOLLYMOON</span>
    </Link>
  )
}
export default React.memo(Logo)
