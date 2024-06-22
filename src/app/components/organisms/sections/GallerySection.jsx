import styles from './GallerySection.module.css'
import Image from 'next/image'
import { Title } from '../../atoms/ui'

export const GallerySection = () => {
  return (
    <div className={styles.container}>
      <div style={{ gridColumn: '1/8', gridRow: '1/3' }}>
        <Title type="secondary">
          {`From Clutter to Clean: Our Junk Removal Services in Action`}
        </Title>
        <p className={styles.description}>
          {`Whether you're dealing with a small amount of clutter or a large-scale cleanout, we're here to help you achieve a peaceful and organized living space.`}
        </p>
      </div>
      <Image
        src="/media-placeholder.jpg"
        alt="junk-squad"
        width={1280}
        height={736}
        style={{
          width: '100%',
          height: '100%',
          gridColumn: '8/13',
          gridRow: '1/3',
        }}
      />
      <Image
        src="/media-placeholder.jpg"
        alt="junk-squad"
        width={1280}
        height={736}
        style={{
          width: '100%',
          height: '100%',
          gridColumn: '1/4',
          gridRow: '3/5',
        }}
      />
      <Image
        src="/media-placeholder.jpg"
        alt="junk-squad"
        width={1280}
        height={736}
        style={{
          width: '100%',
          height: '100%',
          gridColumn: '4/10',
          gridRow: '3/5',
        }}
      />
      <Image
        src="/media-placeholder.jpg"
        alt="junk-squad"
        width={1280}
        height={736}
        style={{
          width: '100%',
          height: '100%',
          gridColumn: '10/13',
          gridRow: '3/5',
        }}
      />
      <Image
        src="/media-placeholder.jpg"
        alt="junk-squad"
        width={1280}
        height={736}
        style={{
          width: '100%',
          height: '100%',
          gridColumn: '1/4',
          gridRow: '3/5',
        }}
      />
    </div>
  )
}
