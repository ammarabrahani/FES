import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="">
            {" "}
            <h1 className="text-3xl font-semibold pr-6">
              <span className=" font-bold">100+</span> Trusted Partners{" "}
            </h1>
          </div>
          <div className="">
            <div className="text-3xl font-semibold">Google</div>{" "}
          </div>
          <div>
            <div className="text-3xl font-semibold ">Google</div>{" "}
          </div>
          <div>
            <div className="text-3xl font-semibold ">Google</div>{" "}
          </div>
          <div>
            <div className="text-3xl font-semibold ">Google</div>{" "}
          </div>
          <div>
            <div className="text-3xl font-semibold ">Google</div>{" "}
          </div>
        </Slider>
      </div>
    );
  }
}
