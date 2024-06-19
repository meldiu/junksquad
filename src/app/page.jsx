import { Form } from '@/components/organisms/form/Form'
import { Title, Section } from '@/components/atoms/ui'
import Image from 'next/image'
// import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
// import { FAQ } from '@/utils/const'
import { CustomizedAccordions } from './components/organisms/ui/accordion/Accordion.jsx'

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum
              dolores, sint voluptate doloremque sunt veniam perferendis
              cupiditate accusantium ipsam iusto fuga quas accusamus quasi
              magni, nam consectetur?
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
        <Form />
      </Section>
      <Section>
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
      </Section>
    </div>
  )
}
