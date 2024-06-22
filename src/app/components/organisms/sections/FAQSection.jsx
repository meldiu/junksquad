import styles from './FAQSection.module.css'
import { CustomizedAccordions } from '@/components/organisms/ui/accordion/Accordion.jsx'
import { Title } from '@/components/atoms/ui'
import Image from 'next/image'

export const FAQSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title type="secondary">{`Frequently Asked Questions`}</Title>
        <CustomizedAccordions />
      </div>

      <div className={styles['image-container']}>
        <Image
          src="/media-placeholder.jpg"
          alt="junk-squad"
          className={styles.image}
          width={1280}
          height={736}
        />
      </div>
    </div>
  )
}
