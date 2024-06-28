import { Title } from '@/components/atoms/ui'
import Image from 'next/image'

// const ITEMS = [
//   {
//     title: 'Flexibility',
//     paragraph:
//       'We can adapt to your needs and schedules to ensure our service fits your requirements.',
//     image: '',
//   },
//   {
//     title: 'Professionalism',
//     paragraph:
//       'Our team is trained and experienced in junk and debris removal, guaranteeing high-quality service.',
//     image: '',
//   },
//   {
//     title: 'Effective Disposal',
//     paragraph:
//       'We ensure that all collected items are disposed of in an efficient and responsible manner. Whenever possible, we also make donations, giving your unwanted items a second life.',
//     image: '',
//   },
// ]

export const VideoSection = () => {
  return (
    <>
      <Title type="secondary">
        {`When choosing Junk Squad, you'll get junk removal service that stands out for:`}
      </Title>

      {/* { <Image src="" alt="" />  !*? Vídeo } */}
      <Image
        src="/media-placeholder.jpg"
        alt="junk-squad"
        // className={styles.image}
        width={1280}
        height={736}
      />
    </>
  )
}
