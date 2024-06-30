'use client'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { smoothScroll } from '@/utils/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link
          href="/"
          className={styles['logo-container']}
          onClick={() => smoothScroll('heroSection')}
        >
          <Image
            width={180}
            height={40}
            src="/logo-header.svg"
            alt="JunkSquad"
            loading="eager"
            priority
            quality={100}
            className={styles.logo}
          />
          <span>{`JS`}</span>
        </Link>
        <Button
          className={styles.button}
          variant="contained"
          size="large"
          sx={{
            width: 'fit-content',
            color: 'inherit',
            boxShadow: 'none',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            background: 'var(--spring--green--300)',
            ':hover': {
              background: 'var(--spring--green--400)',
              boxShadow: 'none',
            },
            ':active': {
              background: 'var(--spring--green--500)',
              boxShadow: 'none',
            },
          }}
          onClick={() => smoothScroll('formSection')}
        >
          {`Book a Call Now`}
        </Button>
      </div>
    </header>
  )
}
