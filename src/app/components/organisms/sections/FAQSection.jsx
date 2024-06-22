import { CustomizedAccordions } from '@/components/organisms/ui/accordion/Accordion.jsx'
import { Title } from '@/components/atoms/ui'
import Image from 'next/image'

export const FAQSection = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        columnGap: '4.5rem',
      }}
    >
      <div style={{ gridColumn: '1/8' }}>
        <Title type="secondary">{`Frequently Asked Questions`}</Title>
        <CustomizedAccordions />
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
        }}
      />
    </div>
  )
}
