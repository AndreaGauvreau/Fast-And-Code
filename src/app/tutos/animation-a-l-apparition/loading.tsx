'use client'
import {Flex, Skeleton} from '@chakra-ui/react'
import React from 'react'

export default function Loading() {
  return (
    <Flex w={'100%'} h={'100%'} justifyContent="center" alignItems={'center'}>
      <Skeleton w={'80%'} h={'50vh'} />
    </Flex>
  )
}
