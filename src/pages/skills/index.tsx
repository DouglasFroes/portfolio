import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

import * as styled from '../../styles/skills'

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'HTML5 &amp; CSS3',
      descripiton:
        'Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.',
      image: '/images/first-white-icon.png'
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
        <styled.body>
          {ListSkills}
          {ListSkills}
          {ListSkills}
          {ListSkills}
          {ListSkills}
          {ListSkills}
          {ListSkills}
          {ListSkills}
        </styled.body>
      </styled.container>
    </Layout>
  )
}

export default Skills
