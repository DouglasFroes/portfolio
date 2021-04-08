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
            apaixonado por tecnologias. Estou aqui para te apresentar um pouco
            sobre os meu trabalhos e habilidades.
          </span>
        </styled.heading>
        <styled.body>
          <styled.infor>
            <styled.row>
              <styled.infImg>
                <img src="/images/formacao.jpeg" />
              </styled.infImg>
              <styled.infText>
                <h4>Formação</h4>
                <p>
                  Bacharel em Ciência da Computação, Na instituição Pitagoras de
                  São luis; Inicio: 2015, Termino: 2018.
                </p>
                <p>
                  AceleraDev React (80 hrs) - Codenation
                  <br />
                  desenvolvimento de Aplicações Para Dispositivos Móveis (80
                  hrs) - Pitagoras
                </p>
              </styled.infText>
            </styled.row>

            <styled.row className="right-image">
              <styled.infText>
                <h4>Area de atuação </h4>
                <p>
                  Atuo na area desenvolvimento de software, trabalho com
                  desenvolvimento de api rest, no desenvolvimento web e
                  desenvolvimento mobile. Sempre utilizando as principais
                  tecnologias e aplicados os principais concites do mercado.
                </p>
              </styled.infText>
              <styled.infImg>
                <img src="/images/trabalho.png" />
              </styled.infImg>
            </styled.row>
          </styled.infor>
        </styled.body>
      </styled.container>
    </Layout>
  )
}

export default Home
