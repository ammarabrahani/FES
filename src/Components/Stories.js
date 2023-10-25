import sucess from "../assest/img_50.jpg";
import quality from "../assest/img_51.jpg";
import assured from "../assest/img_52.jpg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const Stories = () => {
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

  return (
    <div className="">
      <div className="customers flex md:justify-end justify-start my-[6rem] ">
        <p className="">
          <span className="text-[var(--prime-nine)] tracking-wider ">
            SUCCESS STORIES
          </span>
          <span className="block client font-semibold">
            See success stories of
            <span className="sm:block inline"> our customers.</span>
          </span>
        </p>
      </div>
      <div className="enterprise relative py-[7rem]">
        <div className="great flex justify-between flex-wrap  mx-auto w-[90%]  py-6">
          <div>
            <img className="sucess " src={sucess} data-aos="fade-up" />
          </div>
          <div className="great_sucess" data-aos="fade-left">
            “WordPress has been a great{" "}
            <span className="sm:block inline">
              success—with{" "}
              <span className="text-[var(--prime-nine)]">WordPress VIP</span>
            </span>{" "}
            giving us that enterprise”
            <p className="sm:text-2xl text-lg text-white my-[3rem]">
              Rashed Kabir. <span className="opacity-75 ">Pran inc.</span>
            </p>
          </div>
        </div>

        <div className="flex justify-around place-items-center flex-wrap mx-auto w-[90%] my-5">
          <div className="">
            <div className="flex justify-center place-items-center w-[110px] h-[110px] bg-[var(--prime-three)]">
              {" "}
              <p className="text-xl text-center">
                {" "}
                <span className="block text-3xl font-bold">4.8 </span>Rating
              </p>
            </div>
            <p className="text-white sm:text-2xl text-lg mt-[4rem] mb-[2rem] ">
              Rashed Kabir. <span className="opacity-75">Pran inc.</span>
            </p>

            <div className="text-white great_sucess" data-aos="fade-right">
              “
              <span className="text-[var(--prime-two)] underline ">
                Conversation
              </span>{" "}
              has been a
              <span className="sm:block inline"> great success with top</span>{" "}
              assured quality.”
            </div>
            <img className="assure" src={assured} data-aos="fade-up" />
          </div>
          <div>
            <img className="feedback" src={quality} data-aos="fade-up" />
          </div>
        </div>
        <div
          className="customer_data flex justify-center place-items-center "
          data-aos="fade-up"
        >
          <p className="text-center text-2xl">
            {" "}
            <span className="block text-5xl font-bold">32k </span>Customer
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stories;
