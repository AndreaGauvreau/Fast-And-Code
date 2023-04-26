import axios from 'axios'
import {useQuery} from 'react-query'

export const youtubeApi = process.env.NEXT_PUBLIC_YOUTUBE_API ?? ''
export const chanelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANEL ?? ''

export interface Video {
  title: string
  thumbnailUrl: string
}

export async function fetchVideos(
  apiKey: string,
  channelId: string,
): Promise<Video[]> {
  console.log('passage')

  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5&fields=items(snippet(title,thumbnails(medium(url))))`,
  )

  return response.data.items.map((item: any) => ({
    title: item.snippet.title,
    thumbnailUrl: item.snippet.thumbnails.medium.url,
  }))
}

export function useVideos(apiKey: string, channelId: string) {
  return useQuery<Video[], Error>(
    ['videos', apiKey, channelId],
    () => fetchVideos(apiKey, channelId),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60 * 10, // 10 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
    },
  )
}
