import styles from './Tag.module.css'
import propTypes from 'prop-types'
export function Tag({ text }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}
Tag.propTypes = {
  text: propTypes.string,
}
