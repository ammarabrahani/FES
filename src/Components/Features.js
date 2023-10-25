import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import arrowUp from "../assest/Arrowup.png";

export default function TabsVertical() {
  const featureArray = [
    {
      text: "PROPERTY",
      title: "Until recently, the prevailing view assumed lorem ipsum was",
      subText: "Featured-",
      date: "18 JUL 2018",
      image: arrowUp,
    },
    {
      text: "PROPERTY",
      title: "Until recently, the prevailing view assumed lorem ipsum was",
      subText: "Featured-",
      date: "18 JUL 2018",
      image: arrowUp,
    },
    {
      text: "PROPERTY",
      title: "Until recently, the prevailing view assumed lorem ipsum was",
      subText: "Featured-",
      date: "18 JUL 2018",
      image: arrowUp,
    },
    {
      text: "PROPERTY",
      title: "Until recently, the prevailing view assumed lorem ipsum was",
      subText: "Featured-",
      date: "18 JUL 2018",
      image: arrowUp,
    },
    // Add more data objects for additional cards
  ];

  const settings = {
    customPaging: function (i) {
      return <div className="custom-dot">{i + 1}</div>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className="feature mx-auto w-[90%]">
      <Slider {...settings}>
        {featureArray.map((item, index) => (
          <div key={index}>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              {/* Create four cards in a single slide */}
              {Array.from({ length: 4 }).map((_, cardIndex) => (
                <div key={cardIndex}>
                  <Card
                    sx={{
                      background: 0,
                      // height: 300,
                      // width: 430,
                      padding: "75px 40px 50px 60px",

                      // padding: "40px 70px 35px",
                      "@media (max-width: 768px)": {
                        width: "100%",
                        padding: "20px",
                      },
                    }}
                  >
                    <div>
                      <Typography
                        level="body-sm"
                        sx={{
                          color: "#000",
                        }}
                      >
                        {item.property}
                      </Typography>
                      <Typography
                        level="title-lg"
                        sx={{
                          fontSize: "36px",
                          height: "150px",
                          paddingBottom: "35px",
                          marginBottom: "100px",
                          "@media (max-width: 768px)": {
                            fontSize: "24px",
                          },
                          "@media (max-width: 475px)": {
                            fontSize: "18px",
                          },
                        }}
                      >
                        {item.title}
                        <span className="block">{item.subtitle}</span>
                        <span className="block">{item.paragraph}</span>
                      </Typography>
                    </div>

                    <div className="flex justify-between">
                      <div>
                        <p>
                          <span className="font-bold sm:text-lg text-base">
                            {item.subText}
                          </span>
                          <span className="opacity-70"> {item.date}</span>
                        </p>
                      </div>
                      <div className="bg-[var(--prime-nine)] ">
                        <img src={item.image} />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
