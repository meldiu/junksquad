import styles from './TestimonialsSection.module.css'
import { TESTIMONIALS } from '@/utils/const'
import { Title } from '@/components/atoms/ui'
import { Testimony } from '@/components/molecules/testimony/Testimony'
export function TestimonialsSection() {
  return (
    <div className={styles.container}>
      <Title type="secondary">{`Real Reviews From Real Customers`}</Title>

      <div className={styles.content}>
        {TESTIMONIALS.map(({ name, description, stars }, index) => (
          <Testimony
            key={index}
            name={name}
            description={description}
            stars={stars}
          />
        ))}
      </div>
    </div>
  )
}
