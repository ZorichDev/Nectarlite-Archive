import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-linear-to-r from-purple-900 to-purple-500 text-white ${className}`}>{text}</button>
  )
}

export default Button