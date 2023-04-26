'use client'
import Image from 'next/image'
import CardYt from '~/components/CardYt'
import {chanelId, useVideos, youtubeApi} from '~/helpers/youtube'
import styles from './page.module.css'

export default function Home() {
  const {data: videos, isLoading, isError} = useVideos(youtubeApi, chanelId)
  if (isLoading) return <div>Loading...</div>
  if (isError || !videos) return <div>Error loading videos.</div>
  return (
    <div>
      {videos.map((video, index) => (
        <CardYt key={index} datas={video} />
      ))}
    </div>
  )
}
