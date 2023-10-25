import { useParams } from "react-router-dom";
import BlogPost from "../Post.json";
import Navbar from "../Components/Navbar";
import Card from "@mui/material/Card";
import Typography from "@mui/joy/Typography";
import Category from "../Components/Categories";
import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  let { category } = useParams();
  console.log(BlogPost);
  const filteredPost = BlogPost.filter((n) => n.category === category);
  console.log(filteredPost);

  return (
    <div className="blog">
      <div className="bg-black">
        <Navbar />
      </div>{" "}
      <div className="mx-auto w-11/12 py-[8rem]">
        <p
          className={
            category === "Wordpress"
              ? "text-center text-[var(--prime-nine)] sm:text-2xl text-base"
              : "text-[var(--prime-nine)] sm:text-2xl text-base"
          }
        >
          <i>Blog</i>
        </p>
        <p
          className={
            category === "Wordpress"
              ? "text-center sales font-bold py-3"
              : "sales font-bold py-3"
          }
        >
          {" "}
          Check our inside{" "}
          <span className="sm:block inline">news & update.</span>
        </p>
        <div
          className={
            category === "Wordpress"
              ? "block"
              : "flex justify-between flex-wrap "
          }
        >
          <div className="">
            {category === "Marketing" || category === "Plugin" ? (
              <div className="flex flex-col">
                {filteredPost.map((item) => {
                  return (
                    <Card
                      variant="outlined"
                      sx={{
                        background: 0,
                        // width: 430,
                        border: "none",
                        padding: "40px 0",
                        "@media (max-width: 768px)": {
                          width: "100%",
                          padding: "20px",
                        },
                      }}
                    >
                      <div>
                        <img src={item.image} />
                        <Typography
                          level="body-sm"
                          sx={{
                            color: "#000",
                            fontSize: "20px",
                            padding: "20px 0 5px 0",
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
                          <span className="sm:block inline">
                            {item.subtitle}
                          </span>
                          <span className="block">{item.paragraph}</span>
                        </Typography>
                        <div className="text-[var(--prime-nine)] read">
                          <Link to={`/blog/${category}/details`}>
                            {item.button}
                          </Link>{" "}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : category === "Wordpress" ? (
              <div className="grid xl:grid-cols-2 gap-4 grid-col-1 ">
                {filteredPost.map((item) => {
                  return (
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
                  );
                })}
              </div>
            ) : (
              <div className="grid xl:grid-cols-2 gap-4 grid-col-1">
                {filteredPost.map((item) => {
                  return (
                    <Card
                      sx={{
                        background: 0,
                        // width: 430,
                        border: 0,
                        padding: "40px 0",
                        boxShadow: 0,
                        "@media (max-width: 768px)": {
                          width: "100%",
                          padding: "20px",
                        },
                      }}
                    >
                      <div>
                        <img src={item.image} alt="blog" width={500} />
                        <Typography
                          level="body-sm"
                          sx={{
                            color: "#000",
                            fontSize: "20px",
                            padding: "20px 0 5px 0",
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
                            height: "100px",
                            "@media (max-width: 475px)": {
                              fontSize: "18px",
                            },
                          }}
                        >
                          {item.title}
                          <span className="sm:block inline">
                            {item.subtitle}
                          </span>
                        </Typography>
                        <div className="text-[var(--prime-nine)] read">
                          <Link to={`/blog/${category}/details`}>
                            {item.button}
                          </Link>{" "}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
          <div className="px-5">
            {category === "Wordpress" ? "" : <Category />}
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
  );
};

export default CategoryPage;
