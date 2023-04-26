'use client'
import {ChakraProvider, extendTheme, ThemeConfig} from '@chakra-ui/react'
import React, {ReactNode} from 'react'
import {Poppins} from 'next/font/google'
import localFont from 'next/font/local'

const belly = localFont({src: '../font/Bely_display.ttf'})

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const fontMedPoppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})
const customTheme = extendTheme({
  config,
  fonts: {
    body: fontMedPoppins.style.fontFamily,
    heading: belly.style.fontFamily,
  },
})
interface ChakraProvProps {
  children: ReactNode
}
const ChakraProv: React.FC<ChakraProvProps> = ({children}) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
export default ChakraProv
