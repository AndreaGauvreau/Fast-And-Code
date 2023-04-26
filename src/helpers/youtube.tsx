import axios from 'axios'
import {useQuery} from 'react-query'

export const youtubeApi = process.env.NEXT_PUBLIC_YOUTUBE_API ?? ''
export const chanelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANEL ?? ''

export interface Video {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  date: string
}

export async function fetchVideos(
  apiKey: string,
  channelId: string,
): Promise<Video[]> {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`,
  )

  return response.data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnailUrl: item.snippet.thumbnails.medium.url,
    date: item.snippet.publishedAt,
  }))
}

export function useVideos(apiKey: string, channelId: string) {
  return useQuery<Video[], Error>(
    ['videos', apiKey, channelId],
    () => fetchVideos(apiKey, channelId),
    {keepPreviousData: true},
  )
}
