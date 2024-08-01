import Image from 'next/image'
import styles from './Testimony.module.css'
import Rating from '@mui/material/Rating'
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
      <Rating
        name="rating"
        value={stars}
        precision={0.5}
        readOnly
        style={{ color: 'var(--blue--ribbon--500)', marginTop: 'auto' }}
      />
      <span>{}</span>
    </div>
  )
}

Testimony.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  stars: propTypes.number,
}
