import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS_PHONE, BUSINESS_EMAIL } from '@/utils/const'
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['logo-container']}>
          <Image
            src="/logo-footer.svg"
            alt="Junk squad logo"
            width={1280}
            height={736}
          />
        </div>

        <div className={styles.content}>
          <div className={styles['contact-container']}>
            <span>{`Miami, Florida`}</span>
            <span>
              <Link href={`mailto: ${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</Link>
            </span>
            <span>
              <Link href={`tel: ${BUSINESS_PHONE}`}>{BUSINESS_PHONE}</Link>
            </span>
          </div>

          <div className={styles['hours-container']}>
            <span className={styles.bold}>{`Opening Hours`}</span>
            <span>
              <span className={styles.bold}>{`Mon - Sun: `}</span>
              <span>{`8:00 am - 7:00 pm`}</span>
            </span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles['copyright-container']}>
          <span className={styles.copyright}>
            {`${new Date().getFullYear()} Junk Squad c.a, All rights reserved`}
          </span>
        </div>
      </div>
    </footer>
  )
}
