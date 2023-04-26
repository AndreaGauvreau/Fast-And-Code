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
      <Box
        bg={colorsUi.grey1}
        px={4}
        position={'fixed'}
        w={'100vw'}
        zIndex={3}
        top={'0px'}
        left={'0px'}
      >
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
                p={3}
                rounded={'none'}
                aria-label="YouTube"
                bg={colorsUi.grey3}
                _hover={{bg: colorsUi.grey2}}
                color={colorsUi.white1}
              />
            </Link>
            <Link href={'https://www.andrea-gauvreau.fr/'} target={'_blank'}>
              <IconButton
                as={FiGlobe}
                size={'lg'}
                p={3}
                rounded={'none'}
                aria-label="Website"
                bg={colorsUi.grey3}
                _hover={{bg: colorsUi.grey2}}
                color={colorsUi.white1}
              />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}
