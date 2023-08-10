import React, { Component } from "react";
import Slider from "react-slick";
import News from "../News/News";
import { FaArrowRight } from 'react-icons/fa';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="max-w-[1400px] mx-auto">
        <div>
            <p className="text-[32px] flex items-center gap-[12px] my-[32px] text-[#001489]">Latest News <FaArrowRight /></p>
        </div>
        <Slider {...settings}>
          <div>
            <News />
          </div>
          <div>
            <News />
          </div>
          <div>
            <News />
          </div>
          <div>
            <News />
          </div>
          <div>
            <News />
          </div>
          <div>
            <News />
          </div>
        </Slider>
      </div>
    );
  }
}