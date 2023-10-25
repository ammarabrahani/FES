import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Cost from "../assest/icon_92.svg";
const sliderArray = [
  {
    title: "Google",
    text: "Giant search engine",
    paragraph: " One should not hesitate",
    nextText: "to ask for the unlikely as",
    spanText: "they might think.",
    cost: "  Qulaity & Cost: 5.00",
    image: Cost,
    backgroundColor: "#52C1FF",
  },
  {
    title: "Google",
    text: "Giant search engine",
    paragraph: " One should not hesitate",
    nextText: "to ask for the unlikely as",
    spanText: "they might think.",
    cost: "  Qulaity & Cost: 5.00",
    image: Cost,
    backgroundColor: "#00FCFC",
  },
  {
    title: "Google",
    text: "Giant search engine",
    paragraph: " One should not hesitate",
    nextText: "to ask for the unlikely as",
    spanText: "they might think.",
    cost: "  Qulaity & Cost: 5.00",
    image: Cost,
    backgroundColor: "#F27AFF",
  },

  {
    title: "Google",
    text: "Giant search engine",
    paragraph: " One should not hesitate",
    nextText: "to ask for the unlikely as",
    spanText: "they might think.",
    cost: "  Qulaity & Cost: 5.00",
    image: Cost,
    backgroundColor: "#FFED4E",
  },
];
const Slick = () => {
  var settings = {
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <div className="reviews mx-auto w-[90%] my-[10rem]">
      <p className="text-[var(--prime-nine)]">FEEDBACK</p>
      <h2 className="client font-semibold my-3">
        {" "}
        What client think <span className="block ">about us.</span>
      </h2>
      <Slider {...settings}>
        {sliderArray.map((item, index) => {
          return (
            <div className="sm:pr-8 pr-0 py-8">
              <Card
                sx={{
                  backgroundColor: item.backgroundColor,
                  padding: "40px 70px 35px",
                }}
                className="responsive_card"
              >
                <div>
                  <Typography
                    level="title-lg"
                    sx={{
                      fontSize: "40px",
                      "@media (max-width: 475px)": {
                        fontSize: "32px",
                      },
                    }}
                    fontWeight={600}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontSize: "22px",
                      "@media (max-width:475px)": {
                        fontSize: "20px",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </div>

                <p className="card_para my-8">
                  {item.paragraph}
                  <span className="">{item.nextText}</span>
                  {item.spanText}
                </p>

                <div className="flex justify-between flex-wrap">
                  <div>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        "@media (max-width: 475px)": {
                          fontSize: "20px",
                        },
                      }}
                      fontWeight={700}
                    >
                      {item.cost}{" "}
                    </Typography>
                  </div>
                  <div>
                    <div>
                      <img src={item.image} width={30} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slick;
