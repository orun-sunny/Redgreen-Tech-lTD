
import image1 from '../../../assests/store-card-13-homepod-nav-202301.png'
import image2 from '../../../assests/store-card-13-ipad-nav-202210.png'
import image3 from '../../../assests/store-card-13-ipad-nav-202210.png'
import image4 from '../../../assests/store-card-13-ipad-nav-202210.png'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Home() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //   ]);
  // };



  return (


    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div>
          <img alt='somess' src={image1} />
        </div>
          <div>
            <img alt='somess' src={image1} />
          </div>



        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img alt='somess' src={image2} />
          </div>
          <div>
            <img alt='somess' src={image2} />
          </div>


        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      {/* <p className="append-buttons">
            <button onClick={() => prepend2()} className="prepend-2-slides">
              Prepend 2 Slides
            </button>
            <button onClick={() => prepend()} className="prepend-slide">
              Prepend Slide
            </button>
            <button onClick={() => append()} className="append-slide">
              Append Slide
            </button>
            <button onClick={() => append2()} className="append-2-slides">
              Append 2 Slides
            </button>
          </p> */}
    </>


  );
}

