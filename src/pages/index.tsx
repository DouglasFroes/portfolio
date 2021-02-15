import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const Home: React.FC = () => {
  return (
    <Layout pageProps>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Home

// function ola() {
//   const utterance = new SpeechSynthesisUtterance();

//   utterance.lang = "pt-BR";
//   utterance.text = "oi douglas";
//   speechSynthesis.speak(utterance);
// }
// ola();
