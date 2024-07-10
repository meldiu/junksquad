'use client'
import styles from './HeroSection.module.css'
import Image from 'next/image'
import { smoothScroll } from '@/utils/utils'
import { Button } from '@mui/material'
import { Title, Tag } from '@/components/atoms/ui'

export function HeroSection() {
  return (
    <div className={styles.container} id={'heroSection'}>
      <div className={styles.content}>
        <Tag text={`Your Trusted Junk Removal Partner`} />
        <div className={styles['title-container']}>
          <h1
            className={styles.title}
          >{`Get a Fast and Efficient Junk Removal Solution `}</h1>
          <Title>{`and Say Goodbye to Unwanted Junk and Clutter`}</Title>
        </div>
        <p>{`We can help you clean up and improve your property with our full range of junk removal and light demolition services. We'll handle the heavy lifting, so you can focus on what really matters. Our team will carefully disassemble, load, and dispose of unwanted items, furniture, appliances, and even small structures. `}</p>
        <p>{`Contact us today to schedule a free estimate and get started on your project!`}</p>
        <Button
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
      <div className={styles['image-container']}>
        <Image
          src="/hero-image.webp"
          alt="Man carrying a hand trolley."
          width={480}
          height={580}
          loading="eager"
          priority
          quality={100}
        />
      </div>
    </div>
  )
}
