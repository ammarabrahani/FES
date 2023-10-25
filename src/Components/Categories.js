import { Link } from "react-router-dom";
import quickNews from "../assest/blog_img_17.jpg";
const News = [
  {
    image: quickNews,
    title: "10 days quick challange ",
    subtitle: "forboost visitors.",
    date: "23 July, 2022",
  },
  {
    image: quickNews,
    title: "Easy way to boost your",
    subtitle: "bussiness",
    date: "23 July, 2022",
  },
  {
    image: quickNews,
    title: "Introducing new tools for",
    subtitle: "your design",
    date: "23 July, 2022",
  },
];

const categories = ["Digital", "Marketing", "Design", "Wordpress", "Plugin"];
const Category = () => {
  return (
    <div>
      <div className="py-5">
        {" "}
        <h1 className=" font-bold py-3 client"> Categories</h1>
        {categories.map((item) => {
          return (
            <div>
              <li key={item} className="sm:text-2xl text-base list-none py-3">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <Link to={`/blog/${item}`}>{item}</Link>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
      <div className="py-5">
        {" "}
        <h1 className=" font-bold py-5 border-b-2 client">Recent News</h1>
        {News.map((item) => {
          return (
            <div className="flex py-5 border-b-2">
              <div>
                <img className="sm:w-28 w-full" src={quickNews} />
              </div>
              <div className="px-3">
                <p className="font-bold sm:text-2xl text-lg pb-2">
                  {item.title}
                  <span className="sm:block inline"> {item.subtitle}</span>
                </p>
                <p className="sm:text-xl text-base opacity-70">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="banner_section text-center p-[20px] sm:pr-[30px] pr-[20px] pb-[40px]">
        <div className="banner_content h-full ">
          <p className="font-semibold sm:text-2xl text-lg py-3 ">
            Banner Advertise <span className="block">Heading</span>
          </p>
          <p className="sm:text-lg text-base opacity-70 py-5 ">
            From its medieval origins digital
          </p>
          <div className="bg-[var(--prime-nine)] text-white read mx-auto ">
            Download
          </div>
        </div>
      </div> */}
      <div class="sidebar-banner-add">
        <div class="banner-content inline-block my-5 ">
          <h4 className="sm:text-xl text-base font-bold py-2 m-0">
            Banner Advertise <span className="sm:block inline">Heading</span>
          </h4>
          <p className="py-2 m-0">From its medieval origins digital</p>
          <a href="#" className=" download font-bold">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
export default Category;
