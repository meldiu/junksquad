import styles from './HeroSection.module.css'
import Image from 'next/image'
import { Title, Tag } from '@/components/atoms/ui'
import { Button } from '@mui/material'

export function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tag text={`Your Trusted Junk Removal Partner`} />
        <div className={styles['title-container']}>
          <Title type="secondary">{`Get a Fast and Efficient Junk Removal Solution `}</Title>
          <h3
            className={styles['sub-title']}
          >{`and Say Goodbye to Unwanted Junk and Clutter`}</h3>
        </div>
        <p>{`We can help you clean up and improve your property with our full range of junk removal and light demolition services. We'll handle the heavy lifting, so you can focus on what really matters. Our team will carefully disassemble, load, and dispose of unwanted items, furniture, appliances, and even small structures. `}</p>
        <p>{`Contact us today to schedule a free estimate and get started on your project!`}</p>
        <Button
          variant="contained"
          // type="submit"
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
        >
          {`Book a Call Now`}
        </Button>
      </div>
      <div className={styles['image-container']}>
        <Image
          src="/hero-img.webp"
          alt="junk-squad"
          width={600}
          height={400}
          loading="eager"
          priority
          quality={100}
        />
      </div>
    </div>
  )
}