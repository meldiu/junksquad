import styles from './Process.module.css'
import propTypes from 'prop-types'
import Image from 'next/image'
export function Process({ number, title, paragraph, src, altImage }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.number}>{number}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles['image-container']}>
          <Image
            src={src}
            alt={altImage}
            width={120}
            height={120}
            loading="lazy"
            className={styles.image}
          />
        </div>
      </div>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  )
}
Process.propTypes = {
  number: propTypes.string,
  title: propTypes.string,
  paragraph: propTypes.string,
  src: propTypes.string,
  altImage: propTypes.string,
}
