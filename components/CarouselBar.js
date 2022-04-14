
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};




function CarouselBar() {
  return (
    <div>
        <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={false}
  customTransition="all .5"
  transitionDuration={2500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType="desktop"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-100-px border-2 border-black "
>

  <div>
  <Image  src='/img/menu/home.png' width={100} height={100} />

  </div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>


</Carousel>;
    </div>
  )
}

export default CarouselBar;