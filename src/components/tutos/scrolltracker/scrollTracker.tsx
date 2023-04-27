'use client'
import React, {useState} from 'react'
import {useMotionValueEvent, useScroll} from 'framer-motion'
import {Text} from '@chakra-ui/react'

export default function ScrollTracker() {
  const [scrollValue, setScrollValue] = useState(0)
  const {scrollYProgress} = useScroll()
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setScrollValue(latest)
  })
  return (
    <>
      <Text
        position={'fixed'}
        zIndex={99}
        left={20}
        top={'50%'}
        fontWeight={800}
      >
        {scrollValue}
      </Text>
    </>
  )
}
