import styled from 'styled-components'

export const container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const heading = styled.div`
  text-align: center;
  padding: 80px 45px 40px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }
  div {
    width: 60px;
    height: 3px;
    background-color: #00adb5;
    margin: 10px auto;
  }
  span {
    margin-top: 5px;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0.5px;
  }
`

export const body = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  display: grid;
  grid-template-columns: repeat(2, 500px);

  @media screen and (max-width: 1330px) {
    grid-template-columns: repeat(2, 450px);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 400px);
  }

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 350px);
  }

  @media screen and (max-width: 945px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media screen and (max-width: 870px) {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media screen and (max-width: 660px) {
    display: flex;
    grid-template-columns: repeat(1, auto);
  }
`

export const itemSkill = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  width: 420px;

  @media screen and (max-width: 1330px) {
    width: 380px;
  }

  @media screen and (max-width: 1200px) {
    width: 320px;
  }

  @media screen and (max-width: 970px) {
    width: 300px;
  }

  @media screen and (max-width: 870px) {
    /* width: 300px; */
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 770px) {
    max-width: 100%;
    width: 100%;
  }
`

export const viewSkill = styled.div`
  margin-bottom: 10px;
  padding: 50px;
  background-color: rgba(250, 250, 250, 0.1);
  transition: all 0.5s;

  .center {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    /* max-width: 400px; */
    /* width: 400px; */
    height: 160px;
    object-fit: contain;
  }

  h4 {
    transition: all 0.5s;
    /* font-size: 26px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.25px; */
  }
  p {
    transition: all 0.5s;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
  }
`

export const carosel = styled.div`
  margin: 40px 0;
  padding: 0;

  .separa {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 200px;
    object-fit: contain;
    /* overflow: hidden; */
    @media screen and (max-width: 780px) {
      height: 160px;
    }
  }
`
