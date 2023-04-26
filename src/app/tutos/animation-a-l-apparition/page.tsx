import {generateMetadataReturn} from '~/helpers/metadata'
import {videos} from '~/helpers/datas'
import styles from '../../page.module.css'
import Image from 'next/image'

const articleNo = 1
export default function Scroll() {
  return (
    <>
      <div className={styles.contentHead}>
        <h1 className={styles.h1}>{videos[articleNo]?.title}</h1>
        <div className={styles.imageBox}>
          <Image
            src={videos[articleNo]?.imageUrl}
            fill
            alt={videos[articleNo]?.title}
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </>
  )
}
export async function generateMetadata() {
  return generateMetadataReturn(articleNo)
}
