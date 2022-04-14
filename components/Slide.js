import React from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content, width }) => (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    >Merhaba nasilsin</div>
  )
  
  export default Slide