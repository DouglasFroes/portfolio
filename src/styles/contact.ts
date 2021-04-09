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
  width: 100%;
  height: 100%;
  display: flex;

  min-width: 0;
  word-wrap: break-word;
  background: rgba(255, 255, 255, 0.2);
  background-clip: border-box;
  border: 0px solid transparent;
  border-radius: 0px;
`

export const from = styled.form`
  flex: 1 1 auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 15px;
    background-color: transparent;
    border-color: transparent;
    color: #f0f0f0;
    text-align: center;
    font-size: 20px;
    padding: 8px;
    &:focus,
    &:hover {
      font-weight: 700;
    }
    &:focus {
      border-bottom: 2px solid coral;
      outline: none;
    }
    ::placeholder {
      color: #bfbfbf;
    }
  }

  textarea {
    min-height: 110px;
  }
`

export const button = styled.button`
  /* margin-bottom: 15px; */
  background-color: transparent;
  border-radius: 15px;
  color: #fff;
  border-color: transparent;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  padding: 8px;
  background: #00adb5;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    outline: none;
  }
`

export const loading = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 10px solid transparent;
  border-top-color: #000000;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`
