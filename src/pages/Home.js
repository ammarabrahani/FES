import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Stories from "../Components/Stories.js";
import Qna from "../Components/Qna.js";
import Slick from "../Components/Slick.js";
import Footer from "../Components/Footer.js";
import Line from "../assest/shape_114.svg";
import boxOne from "../assest/img_41.jpg";
import subImage from "../assest/shape_115.svg";
import boxTwo from "../assest/img_43.jpg";
import boxThree from "../assest/img_42.jpg";
import CountUp from "react-countup";
import Features from "../Components/Features";
import Segment from "../Components/Segment";
import Connect from "../Components/Connect";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  function Counter({ start, end, duration, symbol, title }) {
    return (
      <div className="text-center sm:w-auto w-full  ">
        <div className="font-medium sm:text-6xl text-3xl my-3 ">
          <CountUp
            start={start}
            end={end}
            symbol={symbol}
            duration={duration}
          />{" "}
          {symbol && <span className="-ml-[10px]">{symbol}</span>}
        </div>
        <p className="sm:text-xl text-lg mb-15">{title}</p>
      </div>
    );
  }
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);
  useEffect(() => {
    const maxWidth = 800;
    const disableAOS = window.innerWidth < maxWidth;

    AOS.init({
      disable: disableAOS,
      duration: 1000,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
              <div className="icon">
                <img
                  src="/logo_01.svg"
                  alt=""
                  className="m-auto d-block"
                  width="40"
                />
              </div>
              <div className="txt-loading mt-3">
                <span data-text-preloader="J" className="letters-loading">
                  J
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="N" className="letters-loading">
                  N
                </span>
                <span data-text-preloader="O" className="letters-loading">
                  O
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="hero_banner">
            <Navbar />
            <div className="mx-auto w-[90%] flex flex-wrap  pt-10 pb-20 sm:flex-nowrap">
              <div className="sm:w-1/2 w-[100%]" data-aos="fade-right">
                <h1 className="sales line-[1.22em]  tracking-wide">
                  Find your{" "}
                  <span className="sm:block inline">
                    quality{" "}
                    <span className="relative">
                      leads{" "}
                      <img className="absolute left-0  bottom-1" src={Line} />
                    </span>{" "}
                  </span>{" "}
                  in single click.
                </h1>
                <p className="sub-text py-5 sm:text-2xl text-base">
                  Turn your business into a sales machine today{" "}
                  <span className="text-white">3x faster</span>{" "}
                  <span className="sm:block inline">
                    revenue than other market.
                  </span>
                </p>
                <div className="flex items-center flex-wrap  ">
                  <a className="demo-btn me-4 sm:my-5 my-2 font-bold" href="#">
                    Request a demo
                  </a>
                  <p className="sm:my-5 my-2">
                    Already using jano?{" "}
                    <a className="text-[var(--prime-one)] underline" href="#">
                      Sign in
                    </a>
                  </p>
                </div>
                <h2 className="sm:text-7xl text-xl text-white mt-20 ">
                  A+ Rating
                </h2>
                <p className="opacity-50 text-white sm:text-2xl text-base my-3">
                  Avg rating 4.8 makes us world most best apps.
                </p>
              </div>
              <div
                className="flex h-full sm:w-1/2 w-[100%] "
                data-aos="fade-left"
              >
                <div class=" relative px-5">
                  <Link to="/blog">
                    {" "}
                    <img
                      src={boxOne}
                      data-src="images/media/img_41.jpg"
                      alt=""
                      className="main_image"
                    />
                  </Link>
                  {/* <img
                    src={subImage}
                    data-src="images/shape/shape_115.svg"
                    alt=""
                    className=" absolute top-50 -mt-6 z-[-1]"
                  /> */}
                  <Link to="/blog">
                    {" "}
                    <img className="box_image mt-5" src={boxThree} />
                  </Link>
                </div>
                <div class="relative px-5">
                  {/* <div className="absolute h-full mx-auto flex items-center -top-[2px] -left-20">
                    <img
                      src="https://html.creativegigstf.com/jano/jano/images/shape/shape_117.svg"
                      alt=""
                    />
                  </div> */}
                  <Link to="/blog">
                    <img
                      src={boxTwo}
                      data-src="images/media/img_41.jpg"
                      alt=""
                      className="banner_image"
                    />
                  </Link>{" "}
                  {/* <img
                    src={subImage}
                    data-src="images/shape/shape_115.svg"
                    alt=""
                    className="absolute top-50 -mt-6 z-[-1]"
                  /> */}
                </div>
              </div>
            </div>
            <div className="partner_section">
              <Segment />
            </div>{" "}
          </div>
          <div className="py-[4rem]">
            {" "}
            <Features />
          </div>
          <div className="flex justify-around flex-wrap mb-[16rem] mt-20">
            <Counter
              start={0}
              end={1}
              symbol="b+"
              duration={4}
              title="Cumulative trading volume"
            />
            <Counter
              start={0}
              end={10}
              duration={4}
              title="Million Insurance Coverage."
            />
            <Counter
              start={0}
              end={120}
              symbol={"+"}
              duration={4}
              title="Country & Regions"
            />
            <Counter
              start={0}
              end={3}
              symbol={"k"}
              duration={4}
              title="Successful Projects"
            />
          </div>

          <Stories />
          <Slick />
          <Qna />
          <div className="enterprise_feature">
            <div className="mx-auto w-[90%]">
              <div className=" mt-5 pt-[6rem] pb-[3rem]">
                <Connect />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
