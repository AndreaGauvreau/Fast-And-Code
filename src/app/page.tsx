'use client'
import {Flex} from '@chakra-ui/react'
import Image from 'next/image'
import CardYt, {CardSkeleton} from '~/components/CardYt'
import {chanelId, useVideos, youtubeApi} from '~/helpers/youtube'
import styles from './page.module.css'

export default function Home() {
  const {data: videos, isLoading, isError} = useVideos(youtubeApi, chanelId)
  if (isLoading)
    return (
      <Flex
        w={'100vw'}
        maxH={'100vh'}
        minH={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <CardSkeleton />
      </Flex>
    )
  if (isError || !videos) return <div>Error loading videos.</div>
  return (
    <>
      <Flex
        w={'100vw'}
        maxH={'100vh'}
        minH={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex
          flexDir={'row'}
          flexWrap={'nowrap'}
          gap={10}
          overflowX={'scroll'}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          p={10}
        >
          {videos.map((video, index) => (
            <CardYt key={index} datas={video} />
          ))}
        </Flex>
      </Flex>
    </>
  )
}
