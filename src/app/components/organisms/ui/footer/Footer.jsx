import Image from 'next/image'
import styles from './Footer.module.css'
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
              <a href="mailto: junksquad@xyz.com">{`junksquad@xyz.com`}</a>
            </span>
            <span>
              <a href="tel: +1 123 456 7890">{`+1 123 456 7890`}</a>
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
