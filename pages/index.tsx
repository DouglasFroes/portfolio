import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
    },
  };
}

// function ola() {
//   const utterance = new SpeechSynthesisUtterance();

//   utterance.lang = "pt-BR";
//   utterance.text = "oi douglas";
//   speechSynthesis.speak(utterance);
// }
// ola();
