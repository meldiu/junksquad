import Image from 'next/image'
import styles from './Testimony.module.css'
import propTypes from 'prop-types'

export function Testimony({ name = 'John', description, stars }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{name}</span>
        <span>
          <Image
            src="/badge-check.svg"
            alt="Badge check"
            width={16}
            height={16}
            loading="lazy"
          />
          Verified Customer
        </span>
      </div>
      <span className={styles.description}>{description}</span>
      <span>{`${'⭐'.repeat(stars)}${`🌑`.repeat(5 - stars)}`}</span>
      <span>{}</span>
    </div>
  )
}

Testimony.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  stars: propTypes.number,
}
