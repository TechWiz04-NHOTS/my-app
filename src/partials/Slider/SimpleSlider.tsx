import React, { Component } from "react";
import Slider from "react-slick";
import News from "../News/News";
import { FaArrowRight } from 'react-icons/fa';

interface ClassProps {
  newsData: object;
}

export default class SimpleSlider extends Component<ClassProps> {
  render() {
    const {newsData}: any = this.props;
    const settings = {
      // dots: true,
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
        {newsData.map((items:any) => (
            <News items={items} />
          ))}
        </Slider>
      </div>
    );
  }
}