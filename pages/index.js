import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const photos = [
  {
    id: 'pics/fhbpsnqljwkrtcfmwcaj',
    name: 'Lake Garda',
    width: 2000,
    height: 1334,
  },
  {
    id: 'pics/ka1db0zvanauhs3chns1',
    name: 'Lake Garda',
    width: 2000,
    height: 1334,
  },
  {
    id: 'pics/yhxghhn7f5et44gb0xrt',
    name: 'Lake Garda',
    width: 2000,
    height: 1334,
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amarjeet Rai Photography - amarjeet.photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.title}>
        <a href="https://arai.dev" rel="me" className={styles.link}>
          amarjeet
        </a>
        .photos
      </header>
      <main className={styles.main}>
        {photos.map((v) => {
          return (
            <Image
              key={v.id}
              src={`https://res.cloudinary.com/arai/image/private/t_2000px/${v.id}`}
              width={v.width}
              height={v.height}
              alt={v.name}
            />
          )
        })}
      </main>
      <footer className={styles.footer}>
        <a href="https://arai.dev" rel="me">
          &copy; Amarjeet Rai 2020
        </a>
      </footer>
    </div>
  )
}
