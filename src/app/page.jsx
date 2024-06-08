import { Form } from '@/components/organisms/form/Form'
import { Section } from '@/components/atoms/ui/Section'

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Section
        isDiv
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
        }}
      >
        <Form />
      </Section>
    </div>
  )
}
