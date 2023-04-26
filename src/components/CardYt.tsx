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
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  AspectRatio,
} from '@chakra-ui/react'
import {BsArrowUpRight, BsHeartFill, BsHeart} from 'react-icons/bs'
import {colorsUi} from '~/ui/colors.js'
import ReactPlayer from 'react-player'
import Link from 'next/link'
import {Video} from '../types/video'

interface CardYtProps {
  datas: Video
}

const CardYt: React.FC<CardYtProps> = ({datas}) => {
  const [hoverElement, setHoverElement] = useState(false)
  const [liked, setLiked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
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
        borderColor={hoverElement ? colorsUi.red1 : 'black'}
        onMouseEnter={() => setHoverElement(true)}
        onMouseLeave={() => setHoverElement(false)}
        transition={'0.5s cubic-bezier(0.75, 0, 0.1, 1)'}
        boxShadow={
          hoverElement ? `12px 12px 0 ${colorsUi?.red1}` : `6px 6px 0 black`
        }
      >
        <Link href={`/tutos/${datas?.slug}`}>
          <Box
            h={'200px'}
            borderBottom={'1px'}
            borderColor={hoverElement ? colorsUi.red1 : 'black'}
            position={'relative'}
            bgImage={datas?.imageUrl}
            bgSize={'cover'}
            cursor="pointer"
          />
          <Box p={4} h={'195px'}>
            <Flex
              gap={hoverElement ? 4 : 2}
              transition={'0.7s cubic-bezier(0.75, 0, 0.1, 1) 0.3s'}
            >
              {datas?.tags?.map((tags, index) => {
                return (
                  <Box
                    bg={hoverElement ? colorsUi.green1 : 'black'}
                    transition={'0.7s cubic-bezier(0.75, 0, 0.1, 1) 0.3s'}
                    color={hoverElement ? colorsUi.green2 : 'white'}
                    px={2}
                    py={1}
                    mb={2}
                    key={index}
                  >
                    <Text fontSize={'xs'} fontWeight="medium">
                      {tags}
                    </Text>
                  </Box>
                )
              })}
            </Flex>

            <Heading color={'black'} fontSize={'2xl'} noOfLines={2}>
              {datas?.title}
            </Heading>
          </Box>
        </Link>
        <HStack
          borderTop={'1px'}
          color={hoverElement ? colorsUi.red1 : 'black'}
          transition={'0.7s cubic-bezier(0.75, 0, 0.1, 1) 0.3s'}
          h={'55px'}
        >
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full"
            onClick={openModal}
          >
            <Text fontSize={'md'} fontWeight={'semibold'}>
              Voir
            </Text>

            <BsArrowUpRight />
          </Flex>
          <Modal
            isCentered
            isOpen={isOpen}
            onClose={closeModal}
            motionPreset="scale"
          >
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent minW={'70vw'}>
              <AspectRatio ratio={16 / 9}>
                <ModalBody
                  minW={'100%'}
                  maxW={'1000px'}
                  p={0}
                  rounded={'4px'}
                  overflow={'hidden'}
                >
                  <ReactPlayer
                    width={'100%'}
                    height={'100%'}
                    url={datas?.url}
                    controls={true}
                  />
                </ModalBody>
              </AspectRatio>
            </ModalContent>
          </Modal>

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
              <BsHeartFill fill={colorsUi.red1} fontSize={'24px'} />
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
