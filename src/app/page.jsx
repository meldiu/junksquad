import { Title, Section } from '@/components/atoms/ui'

import {
  FAQSection,
  FormSection,
  GallerySection,
} from './components/organisms/sections'

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
        <GallerySection />
      </Section>
      <Section>
        <Title type="secondary">{` Tackling the Tiny and the Towering`}</Title>
        <div>ESTA ES LA NUEVA SECCIÓN</div>
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
