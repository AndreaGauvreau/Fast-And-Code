'use client'
import {Flex} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {colorsUi} from '~/ui/colors.js'
export default function Loading() {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      bg={colorsUi.white2}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      position="relative"
    >
      <div style={{position: 'relative'}}>
        <Image
          src="/fast-and-code-icone.png"
          alt="icone-andrea-gauvreau"
          width={200}
          height={200}
        />
        <Image
          src="/fast-and-code-icone.png"
          alt="andrea-gauvreau-banderole"
          width={200}
          height={200}
          className="spin"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
    </Flex>
  )
}
