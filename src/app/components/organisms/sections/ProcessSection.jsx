import styles from './ProcessSection.module.css'
import { PROCESS } from '@/utils/const'
import { Title } from '@/components/atoms/ui'
import { Process } from '@/components/molecules/process/Process'
export function ProcessSection() {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <Title type="secondary">
          {`Our junk removal process is simple and efficient`}
        </Title>
      </div>
      <div className={styles['processes-container']}>
        {PROCESS.map(({ number, title, paragraph, src, altImage }, index) => (
          <Process
            key={index}
            number={number}
            title={title}
            paragraph={paragraph}
            src={src}
            altImage={altImage}
          />
        ))}
      </div>
    </div>
  )
}
