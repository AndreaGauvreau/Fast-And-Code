'use client'
import {Box, Tooltip} from '@chakra-ui/react'
import {Stage} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React, {useState} from 'react'
import {Model} from './Model'

export default function CanvasModel({isCounting, setIsCounting}) {
  const [ishovered, setIsHovered] = useState(false)

  return (
    <Box
      w={{base: '100px', md: '200px'}}
      position={'fixed'}
      bottom={0}
      left={0}
      zIndex={2}
      ml={{base: '10px', md: '50px'}}
      cursor={'pointer'}
    >
      <Tooltip label="Reconcentre toi 🤓" placement="top">
        <Canvas camera={{position: [0, 3, 8], fov: 10}}>
          <Stage
            intensity={0.5}
            preset="rembrandt"
            environment="city"
            shadows={false}
            adjustCamera={true}
          >
            <Model
              isCounting={isCounting}
              setIsCounting={setIsCounting}
              setIsHovered={setIsHovered}
              ishovered={ishovered}
            />
          </Stage>
        </Canvas>
      </Tooltip>
    </Box>
  )
}
