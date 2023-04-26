'use client'
import {useState} from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Skeleton,
} from '@chakra-ui/react'
import {BsArrowUpRight, BsHeartFill, BsHeart} from 'react-icons/bs'
import {Video} from '~/helpers/youtube'
import {colorsUi} from '~/ui/colors.js'

interface CardYtProps {
  datas: Video
}

const CardYt: React.FC<CardYtProps> = ({datas}) => {
  const [liked, setLiked] = useState(false)
  return (
    <Center py={6} h={'500px'}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
      >
        <Box
          h={'200px'}
          borderBottom={'1px'}
          borderColor="black"
          position={'relative'}
          bgImage={datas?.thumbnailUrl}
          bgSize={'cover'}
        />
        <Box p={4} h={'195px'}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize={'xs'} fontWeight="medium" color={colorsUi.red1}>
              Fast and code
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={2}>
            {datas?.title}
          </Heading>
        </Box>
        <HStack borderTop={'1px'} color="black" h={'55px'}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full"
          >
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  )
}
export const CardSkeleton = () => {
  return (
    <Center py={6} h={'500px'}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
      >
        <Skeleton height={'200px'} borderBottom={'1px'} borderColor="black" />
        <Box p={4} h={'195px'}>
          <Skeleton height="20px" width="80px" mb={2} />
          <Skeleton height="32px" mb={2} />
          <Skeleton height="18px" />
        </Box>
        <HStack borderTop={'1px'} color="black" h={'55px'}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full"
          >
            <Skeleton height="18px" width="80px" />
            <Skeleton as={BsArrowUpRight} fontSize={'24px'} />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
          >
            <Skeleton as={BsHeart} fontSize={'24px'} />
          </Flex>
        </HStack>
      </Box>
    </Center>
  )
}

export default CardYt
