'use client'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
        <Link href="/" className={styles['logo-container']}>
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
        </Link>
      </div>
    </header>
  )
}
