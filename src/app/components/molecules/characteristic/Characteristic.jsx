import styles from './Characteristic.module.css'
import propTypes from 'prop-types'
import Image from 'next/image'

export function Characteristic({ icon, alt, title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles['icon-container']}>
        <Image
          src={icon}
          alt={alt}
          width={64}
          height={64}
          loading="lazy"
          className={styles.icon}
        />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

Characteristic.propTypes = {
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}
