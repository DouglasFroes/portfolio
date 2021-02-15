import React from 'react'
import Head from 'next/head'
import Slider from 'react-slick'

import Layout from '../../components/layout'

import * as styled from '../../styles/work'

const Skills: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const skills = [
    {
      name: 'HTML5 &amp; CSS3',
      descripiton:
        'Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.',
      image: '/images/first-white-icon.png'
    },
    {
      name: 'HTML5 &amp; CSS3',
      descripiton:
        'Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.',
      image: '/images/first-white-icon.png'
    }
  ]

  const slider = [
    { title: 'tecteca', image: '/images/tecteca1.jpeg' },
    { title: 'tecteca', image: '/images/tecteca2.jpeg' },
    { title: 'tecteca', image: '/images/tecteca3.jpeg' },
    { title: 'WT Soluções', image: '/images/wt.jpeg' }
  ]
  const sliderRender = slider.map((item: any, index: any) => {
    return (
      <div key={index}>
        <div className="separa">
          <img src={item.image} alt={item.name} />
          <p>{item.title}</p>
        </div>
      </div>
    )
  })

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
    <Layout page={3}>
      <Head>
        <title>portfolio</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <styled.container>
        <styled.heading>
          <h2>Portfolio</h2>
          <div className="line-dec"></div>
          <span>
            Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
            amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.
          </span>
        </styled.heading>
        <styled.carosel>
          <Slider {...settings}>{sliderRender}</Slider>
        </styled.carosel>
        <styled.body>
          {ListSkills}
          {ListSkills}
        </styled.body>
      </styled.container>
    </Layout>
  )
}

export default Skills
