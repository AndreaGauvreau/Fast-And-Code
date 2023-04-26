import {useQuery} from 'react-query'
import {Video} from '~/types/video'
import {videos} from '~/helpers/datas'
export const youtubeApi = process.env.NEXT_PUBLIC_YOUTUBE_API ?? ''
export const chanelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANEL ?? ''

export async function fetchVideos(): Promise<Video[]> {
  return videos
}

export function useVideos(apiKey: string, channelId: string) {
  return useQuery<Video[], Error>(
    ['videos', apiKey, channelId],
    () => fetchVideos(),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60 * 10, // 10 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
    },
  )
}
