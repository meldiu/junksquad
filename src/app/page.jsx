import { Section } from '@/components/atoms/ui'

import {
  FAQSection,
  FormSection,
  GallerySection,
  SizeSection,
  CharacteristicsSection,
  TestimonialsSection,
  AboutSection,
  HeroSection,
  ProcessSection,
} from '@/components/organisms/sections'

export default function HomePage() {
  return (
    <>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <ProcessSection />
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
