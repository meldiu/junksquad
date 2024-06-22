import styles from './FormSection.module.css'
import { Title } from '@/components/atoms/ui'
import { Form } from '@/components/organisms/form/Form'
import Image from 'next/image'

export const FormSection = () => {
  return (
    <div className={styles.container}>
      <Title type="secondary">{`Junk-Free Living Starts Here`}</Title>
      <div className={styles['form-container']}>
        <Image
          src="/media-placeholder.jpg"
          alt="junk-squad"
          width={1280}
          height={736}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <Form />
      </div>
    </div>
  )
}
