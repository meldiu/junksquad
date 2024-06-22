// import { Inter } from 'next/font/google'
import propTypes from 'prop-types'

import '#/node_modules/minireset.css/minireset.min.css'
import { CssBaseline } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JunkSquad',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <CssBaseline />
        {children}
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
