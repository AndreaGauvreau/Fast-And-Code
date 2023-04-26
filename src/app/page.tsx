'use client'
import {Flex} from '@chakra-ui/react'
import Image from 'next/image'
import CardYt, {CardSkeleton} from '~/components/CardYt'
import {chanelId, useVideos, youtubeApi} from '~/helpers/youtube'
import styles from './page.module.css'

export default function Home() {
  const {data: videos, isLoading, isError} = useVideos(youtubeApi, chanelId)
  if (isLoading) return <CardSkeleton />
  if (isError || !videos) return <div>Error loading videos.</div>
  return (
    <div>
      <Flex flexDir={'row'} flexWrap={'wrap'} gap={10}>
        {videos.map((video, index) => (
          <CardYt key={index} datas={video} />
        ))}
      </Flex>
    </div>
  )
}
