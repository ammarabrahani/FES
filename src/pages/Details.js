import React from "react";
import { useParams } from "react-router-dom";
import DetailPost from "../Detail.json";
import Navbar from "../Components/Navbar";
import Category from "../Components/Categories";
// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Comment from "../Components/Comment";
import Footer from "../Components/Footer";

const CategoryDetails = () => {
  const commentData = [
    {
      author: "Al Hasani",
      date: "13 June, 2022, 7:30pm",
      text: "One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort in future. The same true we experience",
    },
    {
      author: "Burton Guster",
      date: "13 June, 2022, 7:30pm",

      text: "You hear about Pluto? That's messed up",
    },
  ];
  const { category } = useParams();
  const categoryDetails = DetailPost.filter(
    (detail) => detail.category === category
  );
  console.log(categoryDetails);

  return (
    <div className="blog">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="mx-auto w-11/12 py-[8rem]">
        <p className="sales font-bold py-3">
          {" "}
          Designer’s Checklist for Every{" "}
          <span className="xl:block inline">UX/UI Project.</span>
        </p>
        <div className="flex justify-between lg:flex-nowrap flex-wrap">
          <div className="lg:w-[60%] w-full">
            {categoryDetails.map((item, index) => (
              <div key={index}>
                <Card
                  sx={{
                    boxShadow: "none",
                  }}
                >
                  <CardActionArea>
                    <img className="w-full py-5" src={item.image} />

                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: "25px",
                          fontWeight: "700",
                          "@media (max-width: 475px)": {
                            fontSize: "18px",
                          },
                        }}
                        gutterBottom
                        component="div"
                      >
                        {item.title}
                        {/* Lizard */}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: "700",
                          "@media (max-width: 475px)": {
                            fontSize: "18px",
                          },
                        }}
                        gutterBottom
                        component="div"
                      >
                        {item.worktitle}
                        {/* Lizard */}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          "@media (max-width: 475px)": {
                            fontSize: "16px",
                          },
                        }}
                        gutterBottom
                        component="div"
                      >
                        {item.text}
                        {/* Lizard */}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          "@media (max-width: 475px)": {
                            fontSize: "16px",
                          },
                        }}
                        variant="body2"
                        color=""
                      >
                        {item.subtext}
                      </Typography>
                      <Typography
                        sx={{
                          padding: "20px 0",
                          fontSize: "20px",
                          "@media (max-width: 475px)": {
                            fontSize: "16px",
                          },
                        }}
                        variant="body2"
                        color=""
                      >
                        {item.paragraph}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* <h2>{detail.title}</h2>
                <p>{detail.text}</p> */}
              </div>
            ))}
            <div className=" ">
              <Comment data={commentData} />
            </div>
          </div>

          {/* <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> */}
          <div className="lg:pl-[20px] pl-0">
            {" "}
            {/* <div className="px-5"> */}
            <Category />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="enterprise_feature">
        <div className="mx-auto w-[90%]">
          <div className=" mt-5 pt-[6rem] pb-[3rem]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   {categoryDetails.map((detail, index) => (
    //     <div key={index}>
    //       <h2>{detail.title}</h2>
    //       <p>{detail.text}</p>
    //       {/* Render other details here */}
    //     </div>
    //   ))}
    // </div>
  );
};

export default CategoryDetails;
