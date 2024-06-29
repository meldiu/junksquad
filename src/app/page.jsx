import { Title, Section } from '@/components/atoms/ui'

import {
  FAQSection,
  FormSection,
  GallerySection,
  SizeSection,
  CharacteristicsSection,
  TestimonialsSection,
  AboutSection,
} from './components/organisms/sections'

export default function HomePage() {
  return (
    <div>
      <Section>
        <Title type="secondary">{`HeroSection`}</Title>
      </Section>
      <Section>
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
    </div>
  )
}
