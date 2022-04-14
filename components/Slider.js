import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/react'
import Slide from './Slide'
import SliderContent from './SliderContent'



function Slider(props) {

   const { slides } = props

   const firstSlide = slides[0]
   const secondSlide = slides[1]
   const lastSlide = slides[slides.length - 1]

   console.log(firstSlide)



   return (
    <div css={SliderCSS}>
      <SliderContent
        translate={1823}
        transition={0.45}
        width={5469}
      >
        {slides.map((_slide, i) => (
          <Slide width={5469} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

   
    </div>
  )
}


const SliderCSS = css`
  position: relative;
  height: 50vh;
  width: 50vw;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`

export default Slider