import propTypes from 'prop-types'

import '#/node_modules/minireset.css/minireset.min.css'
import { CssBaseline } from '@mui/material'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './globals.css'
import { Header, Footer } from '@/components/organisms/ui'
import { Shape } from '@/components/atoms/ui'

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
  description: `Offering professional light demolition, furniture pickup, and comprehensive waste removal for homes and businesses. Declutter your space with Junk Squad's reliable services.`,
  keywords: ['Junk Removal', 'Light Demolition', 'Furniture Pickup'],
  openGraph: {
    title: 'Full Service Junk Removal Services | JunkSquad',
    description: `Declutter your space with Junk Squad's professional junk removal and light demolition services. We handle it all, from furniture pickup to comprehensive waste disposal.`,
    url: '',
    siteName: 'JunkSquad',
    images: [
      {
        url: 'https://i.ibb.co/3pFNN46/op.webp',
        width: 800,
        height: 600,
        alt: `Declutter your space with Junk Squad's professional junk removal and light demolition services. We handle it all, from furniture pickup to comprehensive waste disposal.`,
      },
      {
        url: 'https://i.ibb.co/3pFNN46/op.webp',
        width: 1800,
        height: 1600,
        alt: `Declutter your space with Junk Squad's professional junk removal and light demolition services. We handle it all, from furniture pickup to comprehensive waste disposal.`,
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
        {/* Shape between HeroSection and AboutSection */}
        <Shape />
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
