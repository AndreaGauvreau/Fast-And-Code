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
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import {usePathname} from 'next/navigation'
import {videos} from '~/helpers/datas'
import {colorsUi} from '~/ui/colors'
export default function Layout({children}: LayoutProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex h={'100vh'}>
      <Box
        display={['none', 'none', 'inline']}
        position="fixed"
        h={'100%'}
        width="320px"
        bg={colorsUi.grey1}
        left={0}
      >
        <Sidebar />
      </Box>
      <IconButton
        display={['block', 'block', 'none']}
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
      <Box flex="1" marginLeft={4} ml={{base: '0px', lg: '320px'}}>
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
