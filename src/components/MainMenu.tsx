'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import {FiYoutube, FiGlobe} from 'react-icons/fi'
import {colorsUi} from '~/ui/colors'

export default function MainMenu() {
  return (
    <>
      <Box bg={colorsUi.grey1} px={4} position={'absolute'} w={'100vw'}>
        <Flex
          h={'85px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={'100%'}
        >
          <Box position={'relative'} w={'70px'} h={'70px'}>
            <Image
              src={'/fast-and-code-icone.png'}
              fill
              alt="logo fast and code"
            />
          </Box>
          <HStack as={'nav'} spacing={4} display={'flex'}>
            <Link
              href={'https://www.youtube.com/@andrea.gauvreau'}
              target={'_blank'}
            >
              <IconButton
                as={FiYoutube}
                size={'lg'}
                p={1}
                aria-label="YouTube"
                bg={colorsUi.white1 + 40}
                _hover={{bg: colorsUi.white1, color: colorsUi?.grey1}}
                color={colorsUi.white1}
              />
            </Link>
            <Link href={'https://www.andrea-gauvreau.fr/'} target={'_blank'}>
              <IconButton
                as={FiGlobe}
                size={'lg'}
                p={1}
                aria-label="Website"
                bg={colorsUi.white1 + 40}
                _hover={{bg: colorsUi.white1, color: colorsUi?.grey1}}
                color={colorsUi.white1}
              />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}
