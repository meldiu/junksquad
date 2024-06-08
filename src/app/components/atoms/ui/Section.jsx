import propTypes from 'prop-types'
import styles from './Section.module.css'

export const Section = ({
  children,
  isTheFirstSection = false,
  isDiv = false,
  style,
}) => {
  if (!isDiv) {
    return (
      <section
        className={`${styles.container} ${
          isTheFirstSection ? styles['the-first-section'] : ''
        }`}
        style={style}
      >
        {children}
      </section>
    )
  }

  return (
    <div
      className={`${styles.container} ${
        isTheFirstSection ? styles['the-first-section'] : ''
      }`}
      style={style}
    >
      {children}
    </div>
  )
}

Section.propTypes = {
  children: propTypes.node,
  isTheFirstSection: propTypes.bool,
  isDiv: propTypes.bool,
  style: propTypes.object,
}
