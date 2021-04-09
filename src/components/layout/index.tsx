import React, { useState } from 'react'
// import { AppProps } from 'next/app'
import Head from 'next/head'
import styles from '../layout.module.css'
import Link from 'next/link'

import * as styled from './styled'

export const siteTitle = 'Douglas S. Froes'

const Layout: React.FC<any> = ({ children, page }) => {
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
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        ></link>
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
          <styled.container>
            <styled.imageDiv>
              <Link href="/">
                <img
                  src="https://avatars.githubusercontent.com/u/47641739?s=460&u=60d4e21d8f03d660978cef630b88284610261608&v=4"
                  alt="douglasFroes"
                />
              </Link>
            </styled.imageDiv>
            <styled.authDiv>
              <h4>Douglas S. Froes</h4>
              <span>Programador Full Stack</span>
              <br />
              <span>React Native | React | Express</span>
            </styled.authDiv>
            <styled.menuNav role="navigation">
              <ul>
                <li>
                  <Link href="/">
                    <p id={page === 1 ? 'active' : ''}>Sobre</p>
                  </Link>
                </li>
                <li>
                  <Link href="/skills">
                    <p id={page === 2 ? 'active' : ''}>Habilidades</p>
                  </Link>
                </li>
                <li>
                  <Link href="/work">
                    <p id={page === 3 ? 'active' : ''}>Meu trabalho</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p id={page === 4 ? 'active' : ''}>Contate-me</p>
                  </Link>
                </li>
              </ul>
            </styled.menuNav>
            <styled.socialDiv>
              <ul>
                <li>
                  <a href="https://www.facebook.com/douglas.santos.940641">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5598987278721&text=Ola%2C%20Douglas.%20tudo%20bem%3F%20%20">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/douglasfroes/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/DouglasFroes">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </styled.socialDiv>
            <styled.bottomDiv>
              <p>Copyright 2021 Douglas Froes</p>
            </styled.bottomDiv>
          </styled.container>
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

export default Layout
