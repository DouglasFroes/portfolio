import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../layout.module.css'
import Link from 'next/link'

import * as styled from './styled'

export const siteTitle = 'Portfolio Douglas S. Froes'

export default function Layout({ children, home }: any) {
  const [menu, setMenu] = useState(false)
  const test = {
    display: 'inline-block',
    width: 320,
    transform: 'translateX(0)'
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
          rel="stylesheet"
        />
        <link href="/fontawesome/css/all.css" rel="stylesheet"></link>
      </Head>

      <styled.menuResponsive>
        <i
          className="fa fa-bars"
          id="menu-open"
          onClick={() => setMenu(!menu)}
        ></i>
        <styled.menuDiv style={menu ? test : {}}>
          <div id="menu-close" style={menu ? {} : { display: 'none' }}>
            <i
              className="fa fa-times"
              id="menu-open2"
              onClick={() => setMenu(!menu)}
            ></i>
          </div>
          <styled.conteiner>
            <styled.imageDiv>
              <Link href="/">
                <img
                  src="https://avatars.githubusercontent.com/u/47641739?s=460&u=60d4e21d8f03d660978cef630b88284610261608&v=4"
                  alt="douglasfroes"
                />
              </Link>
            </styled.imageDiv>
            <styled.authDiv>
              <h4>Douglas S. Froes</h4>
              <span>Programador Full Stack</span>
            </styled.authDiv>
            <styled.menuNav role="navigation">
              <ul>
                <li>
                  <Link href="/">
                    <p>Sobre</p>
                  </Link>
                </li>
                <li>
                  <Link href="/skills">
                    <p>Habilidades</p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p>Meu trabalho</p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p>Contate-me</p>
                  </Link>
                </li>
              </ul>
            </styled.menuNav>
            <styled.socialDiv>
              <ul>
                <li>
                  <a href="https://fb.com/templatemo">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
              </ul>
            </styled.socialDiv>
            <styled.bottomDiv>
              <p>Copyright 2021 Douglas Froes</p>
            </styled.bottomDiv>
          </styled.conteiner>
        </styled.menuDiv>
      </styled.menuResponsive>

      <styled.section>{children}</styled.section>

      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  )
}
