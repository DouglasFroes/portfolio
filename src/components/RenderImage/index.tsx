import React from 'react'
import * as styled from './styled'

function RenderImage({ item, open, close }: any) {
  return (
    <styled.renderImage
      isOpen={open}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <img src={item.image} alt={item.name} />
    </styled.renderImage>
  )
}

export default RenderImage
