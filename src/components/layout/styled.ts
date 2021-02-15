import styled from 'styled-components'

export const menuResponsive = styled.div`
  #menu-open {
    display: none;
    z-index: 999;
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    color: #a43f49;
    background-color: #fff;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
  #menu-open2 {
    z-index: 999;
    cursor: pointer;
    top: 0;
    left: 0;
    color: #a43f49;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }

  #menu-close {
    width: 100%;
    height: 60px;
    background-color: #fff;
  }

  @media screen and (max-width: 845px) {
    #menu-open {
      display: inline-block;
    }
  }
`

export const menuDiv = styled.div`
  left: 10%;
  -webkit-transition: -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
  -webkit-overflow-scrolling: touch;
  background-color: #a43f49;
  box-sizing: border-box;
  height: 100%;
  max-height: 100%;
  max-width: 80vw !important;
  min-width: 45px !important;
  outline: none;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  padding: 0;
  position: fixed !important;
  top: calc(0px);
  width: 20%;
  will-change: transform;
  z-index: 9999 !important;
  text-align: center;
  overflow-y: scroll;

  @media screen and (max-width: 1280px) and (min-width: 846px) {
    width: 25%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 845px) {
    width: 320px;
    -webkit-transform: translateX(-100%); // !important;
    transform: translateX(-100%); // !important;
    transition: -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
    transition: transform 233ms cubic-bezier(0, 0, 0.21, 1);
    transition: transform 233ms cubic-bezier(0, 0, 0.21, 1),
      -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
  }

  @media screen and (max-width: 1680px) {
    left: 5%;
  }

  @media screen and (max-width: 1280px) {
    left: 0;
  }
`

export const conteiner = styled.div`
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
  display: block;
`

export const imageDiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
`

export const authDiv = styled.div`
  margin: 40px 4px 60px;
  h4 {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.25px;
    margin-bottom: 0;
    margin-top: 0;
  }
  span {
    font-size: 13px;
    font-style: italic;
    color: #fff;
  }
`

export const menuNav = styled.nav`
  text-align: center;
  display: block;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    display: block;
  }
  li p {
    height: 70px;
    line-height: 70px;
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    width: 100%;
    transition: all 0.5s;
    border-top: 2px solid #fff;
    margin: 0;
  }

  li:last-child p {
    border-bottom: 2px solid #fff;
  }
`
export const socialDiv = styled.div`
  margin-top: 60px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  ul li {
    display: inline-block;
    margin: 0;
  }

  ul li a {
    margin-right: 3px;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 14px;
    transition: all 0.5s;
  }

  @media screen and (max-width: 1680px) and (min-width: 846px) {
    ul li a {
      width: 36px;
      height: 36px;
      line-height: 36px;
    }
    ul li {
      margin: 0;
    }
  }
`

export const bottomDiv = styled.div`
  position: relative;
  margin-top: 60px;

  p {
    border-top: 1px solid rgba(250, 250, 250, 0.1);
    display: inline-block;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    font-size: 13px;
    line-height: 24px;
    color: #fff;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`

export const section = styled.section`
  color: #fff;
  width: 55%;
  right: 10%;
  left: 35%;
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);

  @media screen and (max-width: 1680px) {
    width: 65%;
    right: 5%;
    left: 30%;
  }
  @media screen and (max-width: 845px) {
    width: 94%;
    right: 3%;
    left: 3%;
  }
`
