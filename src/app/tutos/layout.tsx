'use client'
import {HamburgerIcon} from '@chakra-ui/icons'
import {
  Box,
  VStack,
  Flex,
  Center,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Progress,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import {usePathname} from 'next/navigation'
import {videos} from '~/helpers/datas'
import {colorsUi} from '~/ui/colors'
import CanvasModel from '~/components/coffe/Canvas.jsx'
import {useEffect, useState} from 'react'

export default function Layout({children}: LayoutProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [isCounting, setIsCounting] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    let intervalId: any

    if (isCounting) {
      setProgressValue(100)
      intervalId = setInterval(() => {
        setProgressValue(value => value - 0.1)
      }, 10)
    } else {
      setProgressValue(0)
      clearInterval(intervalId)
    }
    if (isCounting === true) {
      setTimeout(() => {
        setIsCounting(false)
      }, 10000)
    }
    return () => clearInterval(intervalId)
  }, [isCounting])

  return (
    <Flex h={'100vh'}>
      <CanvasModel isCounting={isCounting} setIsCounting={setIsCounting} />
      <Box
        display={['none', 'none', 'none', 'inline']}
        position="fixed"
        h={'100%'}
        width="320px"
        bg={colorsUi.grey1}
        left={0}
        transition={'0.3s ease'}
        transform={isCounting ? 'translateX(-100%)' : 'translateX(0px)'}
      >
        <Sidebar />
      </Box>
      <IconButton
        display={['block', 'block', 'block', 'none']}
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="fixed"
        colorScheme={'blackAlpha'}
        top={4}
        left={4}
        zIndex={10}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={colorsUi.grey1}>
          <DrawerCloseButton />
          <Sidebar />
        </DrawerContent>
      </Drawer>
      <Box
        flex="1"
        marginLeft={4}
        transition={'0.3s ease'}
        ml={{base: '0px', lg: isCounting ? '0px' : '320px'}}
        position={'relative'}
      >
        <Progress
          value={isCounting ? progressValue : 0}
          display={isCounting ? 'inline' : 'none'}
          position="fixed"
          size="md"
          top={'0%'}
          left={'0px'}
          zIndex={10}
          w={'100vw'}
          className={isCounting ? 'animateGradient' : ''}
        />
        {children}
      </Box>
    </Flex>
  )
}

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <VStack as="nav" spacing={4} alignItems="flex-start">
      <Center w={'100%'}>
        <Link href={'/'}>
          <Box position={'relative'} w={'100px'} h={'100px'}>
            <Image
              src={'/fast-and-code-icone.png'}
              fill
              alt="logo fast and code"
              priority
            />
          </Box>
        </Link>
      </Center>
      {videos.map((link, index) => (
        <Link key={index} href={`/tutos/${link?.slug}`}>
          <Box w={'320px'}>
            <Text
              bg={'white'}
              noOfLines={2}
              w={'calc(100% - 50px)'}
              ml={'20px'}
              p={2}
              rounded={'0px'}
              transition={'0.4s cubic-bezier(0.75, 0, 0.1, 1)'}
              boxShadow={
                pathname === `/tutos/${link?.slug}`
                  ? '5px 5px 0px 0px black'
                  : '0px 0px 0px 0px black'
              }
            >
              {link.title}
            </Text>
          </Box>
        </Link>
      ))}
      <Box>
        <Text
          bg={'#ffffff50'}
          noOfLines={2}
          w={'200px'}
          ml={'20px'}
          p={2}
          rounded={'0px'}
          boxShadow={'0px 0px 0px 0px black'}
        >
          prochainement...
        </Text>
      </Box>
    </VStack>
  )
}

interface LayoutProps {
  children: React.ReactNode
}
