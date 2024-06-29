import propTypes from 'prop-types'
import styles from './Title.module.css'
export function Title  ({ children, type })  {
  return (
    <h2
      className={`${styles.title} ${type === 'secondary' ? styles.secondary : ''}`}
    >
      {children}
    </h2>
  )
}
Title.propTypes = {
  children: propTypes.node,
  type: propTypes.string,
}
