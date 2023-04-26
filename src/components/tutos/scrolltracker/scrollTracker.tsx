'use client'
import React from 'react'
import {motion, useScroll} from 'framer-motion'

export default function ScrollTracker() {
  const {scrollYProgress} = useScroll()

  return (
    <motion.div className="progress-bar" style={{scaleX: scrollYProgress}} />
  )
}
