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
  padding: 80px 45px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }
  div {
    width: 60px;
    height: 3px;
    background-color: #a43f49;
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
`

export const itemSkill = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
`

export const viewSkill = styled.div`
  margin-bottom: 10px;
  padding: 50px;
  background-color: rgba(250, 250, 250, 0.1);
  transition: all 0.5s;

  img {
    width: 70px;
    height: 70px;
    display: inline-block;
    margin-bottom: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.5s;
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
  }
`
