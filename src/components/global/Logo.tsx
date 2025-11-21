import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="flex items-center text-primary">
      <span className={`font-bold`}>Bollymoon</span>
    </Link>
  )
}
export default React.memo(Logo)
