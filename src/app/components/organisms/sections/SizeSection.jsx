import styles from './SizeSection.module.css'
import Image from 'next/image'
import { Title } from '@/components/atoms/ui'
export const SizeSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.content}>
          <Title type="secondary">{` Tackling the Tiny and the Towering`}</Title>
          <p>
            {`From the smallest of tasks, like hauling away a few old boxes or disposing of unwanted furniture, to the most sizeable projects, such as clearing out a full-scale construction site or dismantling a large tree house - we have the expertise and equipment to get the job done efficiently and effectively.`}
          </p>
          <p>
            {`Our comprehensive junk removal services cater to a wide range of needs, ensuring that no job is too insignificant or too monumental for us to handle. We understand that every piece of clutter, debris, or unwanted item can be a burden, and we're here to lighten that load, no matter the scale.`}
          </p>
        </div>
        <Image
          src="/size.svg"
          alt="junk-squad"
          width={664.81}
          height={638.93}
        />
      </div>
      <p>
        {`So, don't hesitate to reach out to us, no matter the size or scope of your junk removal requirements. We're here to make your life easier, one load at a time.`}
      </p>
    </div>
  )
}
