// import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Navbar from "../Components/Navbar";
import Post from "../Post.json";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Category from "../Components/Categories";
import Footer from "../Components/Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Blog = () => {
  const perPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const itemsForCurrentPage = Post.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="blog ">
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="mx-auto w-11/12 py-[8rem]">
        <p className="text-[var(--prime-nine)] sm:text-2xl text-base">
          <i>Blog</i>
        </p>
        <p className="sales font-bold py-3">
          {" "}
          Check our inside{" "}
          <span className="sm:block inline">news & update.</span>
        </p>
        <div className="flex justify-between flex-wrap ">
          <div className="flex">
            <div className="grid xl:grid-cols-2 gap-4 grid-cols-1">
              {itemsForCurrentPage.map((item) => (
                <div>
                  {" "}
                  {item.category !== "Wordpress" ? (
                    <Card
                      sx={{
                        background: 0,
                        width: 500,
                        border: "none",
                        padding: "40px 0",
                        "@media (max-width: 768px)": {
                          width: "100%",
                          padding: "20px",
                        },
                      }}
                    >
                      <div>
                        <img src={item.image} width={500} />
                        <Typography
                          level="body-sm"
                          sx={{
                            color: "#000",
                            fontSize: "20px",
                            padding: "20px 0 5px 0",
                            "@media(max-width:768px)": {
                              fontSize: "25px",
                            },
                            "@media(max-width:475px)": {
                              fontSize: "16px",
                            },
                          }}
                        >
                          {item.date}
                        </Typography>
                        <Typography
                          level="title-lg"
                          sx={{
                            fontSize: "30px",
                            paddingBottom: "35px",
                            height: "150px",
                            "@media (max-width: 475px)": {
                              fontSize: "18px",
                            },
                          }}
                        >
                          {item.title}
                          <span className="">{item.subtitle}</span>
                        </Typography>
                        {item.category !== "Wordpress" && (
                          <div className="text-[var(--prime-nine)] read">
                            {/* {item.button} */}
                            {/* <Link to={`/blog/${category}/details`}>
                              {item.button}
                            </Link>{" "} */}
                            <Link to={`/blog/${item.category}/details`}>
                              {item.button}
                            </Link>
                          </div>
                        )}
                      </div>
                    </Card>
                  ) : (
                    <Card
                      sx={{
                        background: 0,
                        // height: 300,
                        width: 500,
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
                            "@media(max-width:768px)": {
                              fontSize: "25px",
                            },
                            "@media (max-width: 475px)": {
                              fontSize: "18px",
                            },
                          }}
                        >
                          {item.title}
                          <span className="">{item.subtitle}</span>
                          <span className="">{item.paragraph}</span>
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
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="px-5">
            <Category />
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10">
        {" "}
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(Post.length / perPage)}
            size="large"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
      <div className="enterprise_feature">
        <div className="mx-auto w-[90%]">
          <div className=" mt-5 pt-[6rem] pb-[3rem]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
