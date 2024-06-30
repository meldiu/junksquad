import { Title, Section } from '@/components/atoms/ui'

import {
  FAQSection,
  FormSection,
  GallerySection,
  SizeSection,
  CharacteristicsSection,
  TestimonialsSection,
  AboutSection,
  HeroSection,
} from './components/organisms/sections'

export const metadata = {
  title: 'JunkSquad',
}

export default function HomePage() {
  return (
    <>
      <Section style={{ backgroundColor: 'var(--blue--ribbon--300)' }}>
        <HeroSection />
      </Section>
      <Section style={{ backgroundColor: 'var(--blue--ribbon--300)' }}>
        <AboutSection />
      </Section>
      <Section>
        <Title type="secondary">
          {`Our junk removal process is simple and efficient`}
        </Title>
      </Section>
      <Section>
        <CharacteristicsSection />
      </Section>
      <Section>
        <GallerySection />
      </Section>
      <Section>
        <SizeSection />
      </Section>
      <Section>
        <FormSection />
      </Section>
      <Section>
        <TestimonialsSection />
      </Section>
      <Section>
        <FAQSection />
      </Section>
    </>
  )
}
