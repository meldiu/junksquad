import styles from './GallerySection.module.css'
import Image from 'next/image'
import { Title } from '@/components/atoms/ui'

export const GallerySection = () => {
  return (
    <div className={styles.container}>
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
          src="/media-placeholder.jpg"
          alt="junk-squad"
          width={1280}
          height={736}
        />
      </div>
      <div className={styles['image-container']}>
        <Image
          src="/media-placeholder.jpg"
          alt="junk-squad"
          width={1280}
          height={736}
        />
      </div>
      <div className={styles['image-container']}>
        <Image
          src="/media-placeholder.jpg"
          alt="junk-squad"
          width={1280}
          height={736}
        />
      </div>
      <div className={styles['image-container']}>
        <Image
          src="/media-placeholder.jpg"
          alt="junk-squad"
          width={1280}
          height={736}
        />
      </div>
    </div>
  )
}
