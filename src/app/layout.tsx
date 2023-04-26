import './globals.css'
import {Inter} from 'next/font/google'
import ChakraProv from '~/helpers/chakra'
import QuerysClient from '~/helpers/querysClient.jsx'
import {colorsUi} from '~/ui/colors.js'
import MainMenu from '~/components/MainMenu'
const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: colorsUi.white2}}>
        <QuerysClient>
          <ChakraProv>
            <MainMenu />
            {children}
          </ChakraProv>
        </QuerysClient>
      </body>
    </html>
  )
}
