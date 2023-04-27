import Image from 'next/image'
import React from 'react'
import {CodeBlock} from '~/components/CodeBlock'
import styles from '../../../app/page.module.css'

export default function ScrollExemple() {
  return (
    <div className={styles.scrollSection}>
      <h2 className={styles.h2}>Une méthode efficace, rapide et modulable</h2>
      <p>
        Il existe de nombreuses façons de tracker le scroll d&apos;une page.
        Généralement nous utilisons une méthode JavaScript qui consiste à
        écouter l&apos;événement &apos;scroll&apos; du document pour connaître
        la position actuelle de la fenêtre par rapport au haut de la page.
      </p>
      <p>
        Cette méthode est rapide et efficace, mais elle ne permet pas de tracker
        précisément le pourcentage de scroll de la page. Pour obtenir cette
        information, il est nécessaire de calculer la hauteur totale de la page
        et la position actuelle de la fenêtre. Heureusement, il existe une
        méthode simple pour le faire en JavaScript.
      </p>
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
      <h2 className={styles.h2}> Tracker le scroll grâce à Framer Motion</h2>
      <p>Ici ca va aller assez vite car c&apos;est très simple à faire.</p>
      <p>Installe la dépendance de Framer Motion sur votre projet :</p>
      <CodeBlock code={`npm i framer-motion`} language="shell" />
      <p>Par la suite tu vas Ajouter les dépendances à ton fichier :</p>
      <CodeBlock
        code={`import {motion, useScroll} from 'framer-motion'`}
        language="typescript"
      />
      <p>
        Tu continue en Ajoutant à ton composant le hook te permettant de tracker
        le scroll de la page :
      </p>
      <CodeBlock
        code={`export default function ScrollTracker() {
          const {scrollYProgress} = useScroll()
          return (
            <></>
          )}`}
        language="typescript"
      />
      <p>
        Voilà la valeur que j&apos;obtient lorsque je scroll avec la valeur de
        scrollYProgress affiché
      </p>
      <p>
        Vous noterez que je n&apos;utilise pas directement{' '}
        <strong>scrollYProgress</strong>, il faut passer cette valeur dans le
        hook de Framer Motion <strong>useMotionValueEvent</strong>
      </p>
      <CodeBlock
        code={`import React, {useState} from 'react'
        import {useMotionValueEvent, useScroll} from 'framer-motion'
        import {Text} from '@chakra-ui/react'
        
        export default function ScrollTracker() {

          const [scrollValue, setScrollValue] = useState(0)

          const {scrollYProgress} = useScroll()
          useMotionValueEvent(scrollYProgress, 'change', latest => {
            setScrollValue(latest)
          })
          return (
            <>
              <Text>
                {scrollValue}
              </Text>
            </>
          )
        }`}
        language="typescript"
      />
      <Image
        src={'/images/gif-scroll-fast-code.gif'}
        alt={`gif montrant l'animation du scroll avec framer motion`}
        width={700}
        height={350}
      />
      <p>
        Comme on peut le voir, nous avons une valeur qui passe de 0 à 1 entre le
        début du scroll et l&apos;arrivé au pied de la page.
      </p>
      <p>
        Maintenant que nous avons une valeur qui évolue, nous pouvons imaginer
        tout un tas de chose. On peut très bien utiliser cette valeur pour
        animer une barre de progression au fur et à mesure du scroll, ou alors
        ajouter un évènement lorsque nous atteingons un certain pourcentage de
        scroll, en bref de nombreuses possibilitées...
      </p>
      <h2 className={styles.h2}>Exemples de tracker de scroll :</h2>
      <p>
        Ces exemples sont tirés de la documentation de Framer Motion, Je vous
        invite à y{' '}
        <a href={'https://www.framer.com/motion/use-scroll/'} target={'_blank'}>
          faire un petit tour.
        </a>
      </p>
      <h3 className={styles.h2}>
        Scroll avec un effet &apos;&apos;Smooth&apos;&apos;
      </h3>
      <iframe
        src="https://codesandbox.io/embed/framer-motion-usescroll-with-spring-smoothing-75rw1l?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title="Framer Motion: useScroll with spring smoothing"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      <h3 className={styles.h2}>Tracker le scroll d&apos;un élement précis</h3>

      <iframe
        src="https://codesandbox.io/embed/framer-motion-track-element-position-wnzctr?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title="Framer Motion: Track element position"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      <h3 className={styles.h2}>Scroll &apos;&apos;Horizontal&apos;&apos;</h3>
      <iframe
        src="https://codesandbox.io/embed/framer-motion-usescroll-element-scrolling-eg6fm3?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title="Framer Motion: useScroll element scrolling"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  )
}
