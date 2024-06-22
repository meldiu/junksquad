import styles from './FormSection.module.css'
import { Title } from '@/components/atoms/ui'
import { Form } from '@/components/organisms/form/Form'
import Image from 'next/image'

export const FormSection = () => {
  return (
    <div className={styles.container}>
      <Title type="secondary">{`Junk-Free Living Starts Here`}</Title>
      <div className={styles['form-container']}>
        <div className={styles['image-container']}>
          <Image
            src="/media-placeholder.jpg"
            alt="junk-squad"
            width={1280}
            height={736}
          />
        </div>
        <Form />
      </div>
    </div>
  )
}
