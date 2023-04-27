import {generateMetadataReturn} from '~/helpers/metadata'
import {videos} from '~/helpers/datas'
import styles from '../../page.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {Suspense} from 'react'
const ScrollExemple = dynamic(
  () => import('~/components/tutos/scrolltracker/scrollExemple'),
)
const articleNo = 0
export default function Scroll() {
  const article = videos[articleNo]
  return (
    <>
      <div className={styles.contentHead}>
        <h1 className={styles.h1}>{article?.title}</h1>
        <div className={styles.imageBox}>
          <Image
            src={article?.imageUrl}
            fill
            alt={article?.title}
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.tagsFlex}>
          {article?.tags.map((e: string, index: number) => {
            return <span key={index}>{e}</span>
          })}
        </div>
        <Suspense fallback={<span>loading...</span>}>
          <ScrollExemple />
        </Suspense>
      </div>
    </>
  )
}
export async function generateMetadata() {
  return generateMetadataReturn(articleNo)
}
