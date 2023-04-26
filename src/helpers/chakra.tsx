'use client'
import {ChakraProvider, extendTheme, ThemeConfig} from '@chakra-ui/react'
import React, {ReactNode} from 'react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const customTheme = extendTheme({config})
interface ChakraProvProps {
  children: ReactNode
}
const ChakraProv: React.FC<ChakraProvProps> = ({children}) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
export default ChakraProv
