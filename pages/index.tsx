import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
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
