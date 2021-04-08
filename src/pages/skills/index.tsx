import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'

import * as styled from '../../styles/skills'
import { skills } from '../../../data.json'

const Skills: React.FC = () => {
  const ListSkills = skills.map((item: any, index: any) => {
    return (
      <styled.itemSkill key={index}>
        <styled.viewSkill>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </styled.viewSkill>
      </styled.itemSkill>
    )
  })

  return (
    <Layout page={2}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <styled.container>
        <styled.heading>
          <h2>Minhas Habilidades</h2>
          <div className="line-dec"></div>
        </styled.heading>
        <styled.body>{ListSkills}</styled.body>
      </styled.container>
    </Layout>
  )
}

export default Skills
