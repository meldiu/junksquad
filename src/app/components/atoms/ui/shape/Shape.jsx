import styles from './Shape.module.css'
export function Shape() {
  return (
    <div className={styles['custom-shape-divider']}>
      <svg viewBox="0 0 1280 565" fill="none" preserveAspectRatio="none">
        <path
          d="M0 0C0 0 200.667 101.741 640 101.741C1079.33 101.741 1280 0 1280 0V565C1280 565 954 506.23 640 506.23C326 506.23 0 565 0 565V0Z"
          className={styles['shape-fill']}
        />
      </svg>
    </div>
  )
}
