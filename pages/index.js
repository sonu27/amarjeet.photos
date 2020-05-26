import Head from 'next/head'
import { Pic } from '../Pic'
import { firebase } from '../libs'

// Required for side-effects
require("firebase/firestore")

const db = firebase.firestore()

Home.getInitialProps = async (ctx) => {
  const querySnapshot = await db.collection('posts').get()
  const pics = querySnapshot.docs.map(doc => {
    let data = doc.data()
    return new Pic(doc.id, data.title, data.path, data.date)
  })

  return { pics }
}

export default function Home({ pics }) {
  return (
    <div className="container">
      <Head>
        <title>Amarjeet.photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {pics.map(x => {
          return (
            <div className="wallpaper">
              <img width="1000" src={x.largeUrl} />
            </div>
          )
        })}
      </main>
    </div>
  )
}
