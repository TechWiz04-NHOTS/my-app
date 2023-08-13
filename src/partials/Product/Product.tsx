import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import ProductItem from "../ProductItem/ProductItem";


interface ClassProps {
  productsData: object;
}


export default class Responsive extends Component<ClassProps> {
  render() {
    const {productsData}: any = this.props;
    var settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const goToStore = () =>{
      window.location.href='/store';
    }
    return (
      <div className="background-products">
        <div className="overlay"></div>
        <div className="my-[60px] max-w-[1260px] mx-auto">
        <div className="pt-[30px] mb-[8px] flex items-center gap-[32px] relative z-10">
            <h2 className="text-white text-[32px]"> Products: </h2>
            <p className="text-white mt-[14px] hover:border-b cursor-pointer" onClick={goToStore}>ENTER THE STORE</p>
        </div>
        <Slider {...settings}>
          {productsData.map((items:any) => (
            <ProductItem items={items} />
          ))}
        </Slider>
      </div>
      </div>
    );
  }
}