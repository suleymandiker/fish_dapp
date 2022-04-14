
import React, { useState, useCallback } from 'react'
import images from './images';
import Slider from '../components/Slider';


function test5() {

    const [autoPlay, setAutoPlay] = useState(3)

    const stopAutoPlay = useCallback(() => {
        setAutoPlay(0)
      }, [])




  return (
    <div>
     <Slider slides={images} />
 


    </div>
  )
}

export default test5

