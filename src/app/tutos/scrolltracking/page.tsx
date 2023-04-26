import {generateMetadataReturn} from '~/helpers/metadata'
import {videos} from '~/helpers/datas'
import styles from '../../page.module.css'
import Image from 'next/image'
import ScrollExemple from '~/components/tutos/scrolltracker/scrollExemple'
import ScrollTracker from '~/components/tutos/scrolltracker/scrollTracker'
import {CodeBlock} from '~/components/CodeBlock'

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
        <div className={styles.scrollSection}>
          <h2 className={styles.h2}>
            Une méthode efficace, rapide et modulable
          </h2>
          <span>
            Il existe de nombreuses façons de tracker le scroll d&apos;une page.
            Généralement nous utilisons une méthode JavaScript qui consiste à
            écouter l&apos;événement &apos;scroll&apos; du document pour
            connaître la position actuelle de la fenêtre par rapport au haut de
            la page.
          </span>
          <span>
            Cette méthode est rapide et efficace, mais elle ne permet pas de
            tracker précisément le pourcentage de scroll de la page. Pour
            obtenir cette information, il est nécessaire de calculer la hauteur
            totale de la page et la position actuelle de la fenêtre.
            Heureusement, il existe une méthode simple pour le faire en
            JavaScript.
          </span>
          <CodeBlock
            language="typescript"
            code={`const trackScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const clientHeight = document.documentElement.clientHeight

  const percentScrolled = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100)

  console.log(percentScrolled)
} 
window.addEventListener('scroll', trackScroll)
`}
          />
        </div>
      </div>
    </>
  )
}
export async function generateMetadata() {
  return generateMetadataReturn(articleNo)
}
