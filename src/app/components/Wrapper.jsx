'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Wrapper = ({children, className}) => {
  return (
    <motion.div 
   
    className={`md:px-15 px-5 ${className}`}>{children}</motion.div>
  )
}

export default Wrapper