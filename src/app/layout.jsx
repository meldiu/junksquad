import propTypes from 'prop-types'

import '#/node_modules/minireset.css/minireset.min.css'
import { CssBaseline } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './globals.css'
import { Header, Footer } from '@/components/organisms/ui'

export const metadata = {
  title: {
    template: '%s | JunkSquad',
    default: 'Full Service Junk Removal Services | JunkSquad',
  },
  authors: [
    { name: 'Melissa', url: 'https://www.behance.net/melicolors' },
    { name: 'Eduardo', url: 'https://github.com/MrRedu' },
  ],
  creator: 'Meldiu',
  description: '--- DESCRIPTION METATAG ---',
  keywords: ['KeyWord1', 'KeyWord2', 'KeyWord3'],
  openGraph: {
    title: 'Full Service Junk Removal Services | JunkSquad',
    description: '--- DESCRIPTION OP ---',
    url: '',
    siteName: 'JunkSquad',
    images: [
      {
        url: 'https://i.ibb.co/3pFNN46/op.webp',
        width: 800,
        height: 600,
        alt: 'ALT TEXT TO IMAGE ON OPEN GRAPH',
      },
      {
        url: 'https://i.ibb.co/3pFNN46/op.webp',
        width: 1800,
        height: 1600,
        alt: 'ALT TEXT TO IMAGE ON OPEN GRAPH',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Header />
        <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
