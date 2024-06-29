import styles from './GallerySection.module.css'
import Image from 'next/image'
import { Title } from '@/components/atoms/ui'

export function GallerySection() {
  return (
    <div className={styles.container}>
      <div className={styles['first-section']}>
        <div className={styles.content}>
          <Title type="secondary">
            {`From Clutter to Clean: Our Junk Removal Services in Action`}
          </Title>
          <p className={styles.description}>
            {`Whether you're dealing with a small amount of clutter or a large-scale clean out, we're here to help you achieve a peaceful and organized living space.`}
          </p>
        </div>

        <div className={styles['image-container']}>
          <Image
            src="/0-gallery-img.webp"
            alt="junk-squad"
            width={600}
            height={300}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles['second-section']}>
        <div className={styles['image-container']}>
          <Image
            src="/1-gallery-img.webp"
            alt="junk-squad"
            width={420}
            height={360}
            loading="lazy"
          />
        </div>
        <div className={styles['image-container']}>
          <Image
            src="/2-gallery-img.webp"
            alt="junk-squad"
            width={420}
            height={360}
            loading="lazy"
          />
        </div>
        <div className={styles['image-container']}>
          <Image
            src="/3-gallery-img.webp"
            alt="junk-squad"
            width={420}
            height={360}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
