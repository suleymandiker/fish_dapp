import Slider from '../components/Slider';

import React, {useEffect, useState} from 'react';





function slidertest(props) {

    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
        <Slider />
    </div>
  )
}

export default slidertest