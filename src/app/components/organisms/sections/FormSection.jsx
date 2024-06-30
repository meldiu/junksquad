import styles from './FormSection.module.css'
import { Title } from '@/components/atoms/ui'
import { Form } from '@/components/organisms/form/Form'
import Image from 'next/image'

export function FormSection() {
  return (
    <div className={styles.container} id={'formSection'}>
      <Title type="secondary">{`Junk-Free Living Starts Here`}</Title>
      <div className={styles['form-container']}>
        <div className={styles['image-container']}>
          <Image
            src="/form-img.webp"
            alt="JunkSquad logo on the back of a uniform shirt."
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <Form />
      </div>
    </div>
  )
}
