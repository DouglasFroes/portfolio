import React, { useState } from 'react'
import Head from 'next/head'
import Slider from 'react-slick'

import Layout, { siteTitle } from '../../components/layout'

import * as styled from '../../styles/work'
import { works } from '../../../data.json'
import RenderImage from '../../components/RenderImage'

const Works: React.FC = () => {
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

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  const ListWorks = works.map((item: any, index: any) => {
    const sliderOrient = item?.imagesVertical ? settings : settings2

    return (
      <styled.itemSkill key={index}>
        <styled.viewSkill>
          <Slider {...sliderOrient}>
            {item?.image?.map((obj: any, index: any) => {
              const [modal, setModal] = useState(false)
              function md() {
                setModal(!modal)
              }

              return (
                <div key={index} onClick={md}>
                  <div className="center">
                    <img className="imageWork" src={obj.image} alt={obj.name} />
                  </div>
                  <RenderImage item={obj} open={modal} close={md} />
                </div>
              )
            })}
          </Slider>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </styled.viewSkill>
      </styled.itemSkill>
    )
  })

  return (
    <Layout page={3}>
      <Head>
        <title>{siteTitle}</title>
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
          <h2>Trabalhos Realizados</h2>
          <div className="line-dec"></div>
        </styled.heading>
        <styled.body>{ListWorks}</styled.body>
      </styled.container>
    </Layout>
  )
}

export default Works
