'use client'
import {Box, VStack, Flex, Center, Text} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {usePathname} from 'next/navigation'
import {videos} from '~/helpers/youtube'
import {colorsUi} from '~/ui/colors'
export default function Layout({children}: LayoutProps) {
  return (
    <Flex h={'100vh'}>
      <Box h={'100%'} width="250px" bg={colorsUi.grey1}>
        <Sidebar />
      </Box>
      <Box flex="1" marginLeft={4}>
        {children}
      </Box>
    </Flex>
  )
}

const Sidebar = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <VStack as="nav" spacing={4} alignItems="flex-start">
      <Center w={'100%'}>
        <Link href={'/'}>
          <Box position={'relative'} w={'100px'} h={'100px'}>
            <Image
              src={'/fast-and-code-icone.png'}
              fill
              alt="logo fast and code"
            />
          </Box>
        </Link>
      </Center>
      {videos.map((link, index) => (
        <Link key={index} href={`/tutos/${link?.slug}`}>
          <Text
            bg={'white'}
            noOfLines={2}
            w={'200px'}
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
