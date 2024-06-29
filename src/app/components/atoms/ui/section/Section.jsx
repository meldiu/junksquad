import propTypes from 'prop-types'
import styles from './Section.module.css'

export function Section({ children, style }) {
  return (
    <section className={`${styles.container} `} style={style}>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: propTypes.node,
  style: propTypes.object,
}
