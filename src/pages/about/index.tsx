import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

import * as styled from '../../styles/about'

const About: React.FC = () => {
  return (
    <Layout page={2}>
      <Head>
        <title>habilidades</title>
      </Head>
      <styled.container>
        <styled.heading>
          <h2>Sobre min</h2>
          <div className="line-dec"></div>
          <span>
            Ola👋, Me chamo Douglas e sou programador full stack. estou aqui
            para te aprensentar um pouco sobre os meu trabalhos e habiladas.
          </span>
        </styled.heading>
        <styled.body>
          <styled.infor>
            <styled.row>
              <div>
                <h4>Formação</h4>
                <p>
                  Donec tristique feugiat lacus, at sollicitudin nunc euismod
                  sed. Mauris viverra, erat non sagittis gravida, elit dui
                  mollis ante, sit amet eleifend purus ligula eget eros. Sed
                  tincidunt quam vitae neque pharetra dignissim eget ut libero.
                </p>
              </div>
              <div>
                <h4>Formação</h4>
                <p>
                  Donec tristique feugiat lacus, at sollicitudin nunc euismod
                  sed. Mauris viverra, erat non sagittis gravida, elit dui
                  mollis ante, sit amet eleifend purus ligula eget eros. Sed
                  tincidunt quam vitae neque pharetra dignissim eget ut libero.
                </p>
              </div>
            </styled.row>
          </styled.infor>
        </styled.body>
      </styled.container>
    </Layout>
  )
}

export default About
