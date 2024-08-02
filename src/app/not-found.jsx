import styles from './NotFound.module.css'
import Image from 'next/image'
import { Section } from '@/components/atoms/ui'
import { BUSINESS_PHONE } from '@/utils/const'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Section
      style={{
        marginTop: '80px',
        minHeight: 'calc(100dvh - 80px)',
        position: 'relative',
      }}
    >
      <div className={styles.container}>
        <div className={styles['image-container']}>
          <Image
            src={'/truck-404.svg'}
            alt="Illustration of an empty truck"
            width={920}
            height={920}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{`Oops! That page doesn't exist.`}</h2>
          <p
            className={styles.paragraph}
          >{`We seem to have misplaced the page you were looking for. Don't worry though, we'll help you find what you need!`}</p>
          <span className={styles['helper-text']}>
            {`Contact us at`}{' '}
            <Link href={`tel:${BUSINESS_PHONE}`}>{BUSINESS_PHONE}</Link>{' '}
            {`and we'll point you in the right direction.`}
          </span>
        </div>
      </div>
    </Section>
  )
}
