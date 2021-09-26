import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'
import {CardData} from "../models/common";

type HomeViewModel = {
  title: string
  cards?: CardData[]
}

const Home = ( { content } : InferGetStaticPropsType<typeof getStaticProps> ) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/example.tsx</code>
        </p>

        <div className={styles.grid}>
          {content.cards?.map((card, index) =>
              <a key={index} href="https://github.com/Midwestern-Interactive/tech-challenge" className={styles.card}>
                <h2>{card.heading} &rarr;</h2>
                <p>{card.body}</p>
              </a>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const content: HomeViewModel = {
    title: "Midwestern Tech Challenge",
    cards: [
      {
        heading: "Documentation",
        body: "Find in-depth information about Next.js features and API."
      },
      {
        heading: "Learn",
        body: "Learn about Next.js in an interactive course with quizzes!"
      },
      {
        heading: "Examples",
        body: "Discover and deploy boilerplate example Next.js projects."
      },
      {
        heading: "Deploy",
        body: "Instantly deploy your Next.js site to a public URL with Vercel."
      },
    ]
  }

  return {
    props: {
      content
    }
  }
}

export default Home
