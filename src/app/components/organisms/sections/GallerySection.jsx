import styles from './GallerySection.module.css'
import Image from 'next/image'
import { Title } from '@/components/atoms/ui'

export const GallerySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles['first-section']}>
        <div className={styles.content}>
          <Title type="secondary">
            {`From Clutter to Clean: Our Junk Removal Services in Action`}
          </Title>
          <p className={styles.description}>
            {`Whether you're dealing with a small amount of clutter or a large-scale cleanout, we're here to help you achieve a peaceful and organized living space.`}
          </p>
        </div>

        <div className={styles['image-container']}>
          <Image
            src="/0-galley-img.webp"
            alt="junk-squad"
            width={600}
            height={300}
            loading="lazy"
            className={` ${styles.image} ${styles['image-0']}`}
          />
        </div>
      </div>

      <div className={styles['second-section']}>
        <div className={styles['image-container']}>
          <Image
            src="/1-galley-img.webp"
            alt="junk-squad"
            width={420}
            height={360}
            loading="lazy"
            className={` ${styles.image} ${styles['image-1']}`}
          />
        </div>
        <div className={styles['image-container']}>
          <Image
            src="/2-galley-img.webp"
            alt="junk-squad"
            width={420}
            height={360}
            loading="lazy"
            className={` ${styles.image} ${styles['image-2']}`}
          />
        </div>
        <div className={styles['image-container']}>
          <Image
            src="/3-galley-img.webp"
            alt="junk-squad"
            width={420}
            height={360}
            loading="lazy"
            className={` ${styles.image} ${styles['image-3']}`}
          />
        </div>
      </div>
    </div>
  )
}
