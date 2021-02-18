import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import * as styled from '../styles/about'

const Home: React.FC = () => {
  return (
    <Layout page={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <styled.container>
        <styled.heading>
          <h2>Sobre mim</h2>
          <div className="line-dec" />
          <span>
            Ola👋, Me chamo Douglas. <br /> Sou programador full stack e
            apaixodo por tecnologias. Estou aqui para te aprensentar um pouco
            sobre os meu trabalhos e habiladas.
          </span>
        </styled.heading>
        <styled.body>
          <styled.infor>
            <styled.row>
              <styled.infImg>
                <img src="/images/left-image.jpg" />
              </styled.infImg>
              <styled.infText>
                <h4>Formação</h4>
                <p>
                  Bacharel em Ciência da Computação, Na instituição Pitagoras de
                  São luis; Inicio: 2015, Termino: 2018.
                </p>
              </styled.infText>
            </styled.row>

            <styled.row className="right-image">
              <styled.infText>
                <h4>Area de atuação </h4>
                <p>
                  Atuo na area desenvolvimento de api rest, desenvolvimento web
                  e criacão aplicativo mobile. Utilizando as pricipais
                  tecnoligias e aplicados os pricipais consciteso do mercado.
                </p>
              </styled.infText>
              <styled.infImg>
                <img src="/images/left-image.jpg" />
              </styled.infImg>
            </styled.row>
          </styled.infor>
        </styled.body>
      </styled.container>
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
