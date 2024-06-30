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
    default: 'JunkSquad',
  },
  authors: [
    { name: 'Melissa', url: 'https://www.behance.net/melicolors' },
    { name: 'Eduardo', url: 'https://github.com/MrRedu' },
  ],
  creator: 'Meldiu',
  description: '',
  keywords: ['', '', ''],
  openGraph: {
    title: 'JunkSquad',
    description: '',
    url: '',
    siteName: 'JunkSquad',
    images: [
      {
        url: 'https://i.ibb.co/g37bq8f/og-repo.webp',
        width: 800,
        height: 600,
        alt: 'Compilation of web development and design tools and resources.',
      },
      {
        url: 'https://i.ibb.co/g37bq8f/og-repo.webp',
        width: 1800,
        height: 1600,
        alt: 'Compilation of web development and design tools and resources.',
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
