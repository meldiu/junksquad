import styles from './Footer.module.css'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.information}>
            <span>{`Miami, Florida`}</span>
            <span>
              <a href="mailto: junksquad@xyz.com">{`junksquad@xyz.com`}</a>
            </span>
            <span>
              <a href="tel: +1 123 456 7890">{`+1 123 456 7890`}</a>
            </span>
          </div>
          <div className={styles.horary}>
            <span>Opening Hours</span>
            <span>{`Mon - Sun: 8am - 7pm`}</span>
          </div>
        </div>

        <div className={styles.divider} />
        <div>
          {new Date().getFullYear()} Junk Squad c.a, All rights reserved
        </div>
      </div>
    </footer>
  )
}
