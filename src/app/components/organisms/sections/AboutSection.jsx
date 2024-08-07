import styles from './AboutSection.module.css'
import Image from 'next/image'
import { Title } from '@/components/atoms/ui'

export function AboutSection() {
  return (
    <div className={styles.container}>
      <Title>
        {`Are you tired of dealing with unwanted junk and clutter?`}
      </Title>

      <p>{`At Junk Squad, we know that a cluttered and disorganized space can be overwhelming and stressful. Clutter and junk can quickly take over your home, office, or property, making it difficult to maintain a clean and organized space. `}</p>
      <div className={styles['image-container']}>
        <Image
          src="/characteristics.webp"
          alt="Men carrying a box spring."
          width={730}
          height={410}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <p>
        <span>{`That's why `}</span>
        {`we offer a comprehensive junk removal service designed to help you eliminate unwanted items and restore your property to its original state.`}
      </p>
    </div>
  )
}
