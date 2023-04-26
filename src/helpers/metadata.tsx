// helpers/metadata.ts
import {videos} from './datas'

export function generateMetadataReturn(articleNo: number) {
  return {
    title: videos[articleNo].title,
    description: videos[articleNo].title,
    keywords: videos[articleNo].tags.map(e => e),
    publisher: 'andréa gauvreau',
    creator: 'andréa gauvreau',
    authors: [
      {name: 'Gauvreau'},
      {name: 'andréa', url: 'https://www.andrea-gauvreau.fr'},
    ],
    metadataBase: new URL('https://fast-and-code.com/'),
    alternates: {
      canonical: `/tutos/${videos[articleNo].slug}`,
    },
    openGraph: {
      images: videos[articleNo].imageUrl,
      url: `/tutos/${videos[articleNo].slug}`,
    },
  }
}
