import styles from './CharacteristicsSection.module.css'
import Image from 'next/image'
import { Title } from '@/components/atoms/ui'
import { Characteristic } from '@/components/molecules/characteristic/Characteristic'
import { CHARACTERISTICS } from '@/utils/const'

export function CharacteristicsSection() {
  return (
    <div className={styles.container}>
      <Title type="secondary">
        {`When choosing Junk Squad, you'll get junk removal service that stands out for:`}
      </Title>
      <div className={styles.content}>
        <div className={styles['image-container']}>
          <Image
            src="/about-gif.gif"
            alt="Men working at JunkSquad."
            width={600}
            height={400}
            loading="lazy"
            className={styles.image}
            unoptimized
          />
        </div>
        <div className={styles.characteristics}>
          {CHARACTERISTICS.map(({ title, description, icon, alt }, index) => (
            <Characteristic
              key={index}
              title={title}
              description={description}
              icon={icon}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
