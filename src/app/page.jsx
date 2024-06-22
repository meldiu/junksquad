import { Title, Section } from '@/components/atoms/ui'
import Image from 'next/image'

import { FAQSection, FormSection } from './components/organisms/sections'

export default function HomePage() {
  return (
    <div>
      <Section>
        <Title type="secondary">{`HeroSection`}</Title>
      </Section>
      <Section>
        <Title type="secondary">
          {`Are you tired of dealing with unwanted junk and clutter?`}
        </Title>
      </Section>
      <Section>
        <Title type="secondary">
          {`Our junk removal process is simple and efficient`}
        </Title>
      </Section>
      <Section>
        <Title type="secondary">
          {`When choosing Junk Squad, you'll get junk removal service that stands out for:`}
        </Title>
        <div>DIV</div>
      </Section>
      <Section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'repeat(4, 1fr)',
            columnGap: '2.5rem',
            rowGap: '3rem',
          }}
        >
          <div style={{ gridColumn: '1/8', gridRow: '1/3' }}>
            <Title type="secondary">
              {`From Clutter to Clean: Our Junk Removal Services in Action`}
            </Title>
            <h3
              style={{
                marginTop: '1rem',
                color: 'red',
                fontSize: 'var(--title--large)',
              }}
            >
              {`Whether you're dealing with a small amount of clutter or a large-scale cleanout, we're here to help you achieve a peaceful and organized living space.`}
            </h3>
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
      </Section>
      <Section>
        <FormSection />
      </Section>
      <Section>
        <FAQSection />
      </Section>
    </div>
  )
}
