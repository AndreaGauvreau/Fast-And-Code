import {useQuery} from 'react-query'

export const youtubeApi = process.env.NEXT_PUBLIC_YOUTUBE_API ?? ''
export const chanelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANEL ?? ''

export interface Video {
  id: string
  title: string
  slug: string
  imageUrl: string
  description: string
  url: string
  tags: string[]
}

export async function fetchVideos(): Promise<Video[]> {
  // Retourner l'objet 'videos' directement
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

export const videos: Video[] = [
  {
    id: '1',
    slug: 'scrolltracking',
    title: 'Tracker le scroll de la page',
    imageUrl:
      'https://i.ytimg.com/vi/Zh06rzhTWeA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhnsXPRpyBWAU2pjkzJS0WekvMNQ',
    description: 'Description de la première vidéo',
    url: 'https://www.youtube.com/watch?v=Zh06rzhTWeA&t=1935s&ab_channel=Andreagv',
    tags: ['Next', 'Three js', 'React'],
  },
  {
    id: '2',
    slug: 'animation-a-l-apparition',
    title: 'Animer un élément à son apparition',
    imageUrl:
      'https://i.ytimg.com/vi/Zh06rzhTWeA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhnsXPRpyBWAU2pjkzJS0WekvMNQ',
    description: 'Description de la première vidéo',
    url: 'https://www.youtube.com/watch?v=Zh06rzhTWeA&t=1935s&ab_channel=Andreagv',
    tags: ['Next', 'Three js', 'React'],
  },
]
