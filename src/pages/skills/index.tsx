import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

import * as styled from '../../styles/skills'

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'React Native',
      descripiton:
        'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.',
      image: 'https://reactnative.dev/img/header_logo.svg'
    },
    {
      name: 'React js',
      descripiton:
        'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras.',
      image:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
    },
    {
      name: 'Node.js',
      descripiton:
        'Node.js é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend/servidor e frontend/interface, baseado no V8 interpretador de JavaScript em C++ do Google, mantido pela fundação Node.js em parceria com a Linux Foundation.',
      image: 'https://nodejs.org/static/images/logo.svg'
    },
    {
      name: 'Express.js',
      descripiton:
        "Express.js é um framework para aplicações web para Node.js, lançado como software livre e de código aberto sob a Licença MIT. É feito para otimizar a construção de aplicações web e API's. É um dos mais populares frameworks para servidores em Node.js.",
      image: '/images/express.png'
    },
    {
      name: 'TypeORM ',
      descripiton:
        'TypeORM é um ORM que pode ser executado nas plataformas NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo e Electron e pode ser usado com TypeScript e JavaScript (ES5, ES6, ES7, ES8). Seu objetivo é sempre oferecer suporte aos recursos JavaScript mais recentes e fornecer recursos adicionais que o ajudem a desenvolver qualquer tipo de aplicativo que use bancos de dados - desde pequenos aplicativos com algumas tabelas até aplicativos corporativos de grande escala com vários bancos de dados.',
      image:
        'https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png'
    },
    {
      name: 'TypeScript',
      descripiton:
        'TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript.',
      image: '/images/typescript.png'
    },
    {
      name: 'Firebase',
      descripiton:
        'Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web. Originalmente, era uma empresa independente fundada em 2011. Em 2014, o Google adquiriu a plataforma e agora é sua principal oferta para o desenvolvimento de aplicativos.',
      image:
        'https://www.gstatic.com/devrel-devsite/prod/v4ff7513a940c844d7a200d0833ef676f25fef10662a3b57ca262bcf76cbd98e2/firebase/images/lockup.png'
    },
    {
      name: 'Docker ',
      descripiton:
        'Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração',
      image: '/images/docker.png'
    },
    {
      name: 'PostgreSQL',
      descripiton:
        'PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.',
      image: 'https://www.postgresql.org/media/img/about/press/elephant.png'
    },
    {
      name: 'Next.js',
      descripiton:
        'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.',
      image: '/images/next.png'
    },
    {
      name: 'Ionic',
      descripiton:
        'Ionic é um SDK de código aberto completo para desenvolvimento de aplicativo móvel híbrido criado por Max Lynch, Ben Sperry e Adam Bradley da Drifty Co. em 2013. A versão original foi lançada em 2013 e construída sobre AngularJS e Apache Cordova.',
      image: '/images/Ionic.png'
    }
  ]

  const ListSkills = skills.map((item: any, index: any) => {
    return (
      <styled.itemSkill key={index}>
        <styled.viewSkill>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>{item.descripiton}</p>
        </styled.viewSkill>
      </styled.itemSkill>
    )
  })

  return (
    <Layout page={2}>
      <Head>
        <title>habilidades</title>
      </Head>
      <styled.container>
        <styled.heading>
          <h2>What I’m good at?</h2>
          <div className="line-dec"></div>
          <span>
            Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
            Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
            Nullam eu faucibus diam. Donec eget massa ante.
          </span>
        </styled.heading>
        <styled.body>{ListSkills}</styled.body>
      </styled.container>
    </Layout>
  )
}

export default Skills
