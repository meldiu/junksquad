import { Inter } from 'next/font/google'
import propTypes from 'prop-types'

import '#/node_modules/minireset.css/minireset.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JunkSquad',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
