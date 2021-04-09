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

  .right-image {
    margin-top: 60px;
    padding-top: 60px;
    border-top: 2px solid rgba(250, 250, 250, 0.1);
  }
`
export const infor = styled.div``

export const row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`
export const infImg = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  img {
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    margin: 0;
  }
`
export const infText = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  div {
  }
  h4 {
    margin-top: 0px;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.25px;
  }
  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }
`
