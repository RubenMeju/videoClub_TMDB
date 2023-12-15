"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 6.5,
  slidesToScroll: 3,
  initialSlide: 0,
  rows: 1,
  //adaptiveWidth: false,
  // adaptiveHeight: false,
  // variablewidth: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function SliderCharacters({ children }) {
  return <Slider {...settings}>{children}</Slider>;
}
