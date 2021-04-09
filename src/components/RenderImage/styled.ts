import styled from 'styled-components'
import Modal from 'react-modal'

export const renderImage = styled(Modal)`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 80%;
    max-width: 80%;
    object-fit: contain;
  }
  div {
    display: flex;
    button,
    a {
      margin: 3px;
      width: 160px;
      padding: 5px;
      border-radius: 10px;
      background: #00adb5;
      text-align: center;
      font-weight: 700;
      color: #fff;
      font-size: 17px;
      border: none;
      text-decoration: none;
      &:hover {
        opacity: 0.75;
      }
    }
  }
`
