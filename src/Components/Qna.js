import Faq from "react-faq-component";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const data = {
  rows: [
    {
      title: "01.  How does the free trial work?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "02. How do you find different criteria in your process?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "03.  How does the free trial work?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "04.  How does the free trial work?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "05.  How does the free trial work?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ],
};
const styles = {
  bgColor: " #f6f6f6",
  rowTitleTextSize: "24px",
  rowContentTextSize: "20px",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentPaddingTop: "50px",
  rowContentPaddingBottom: "50px",
  rowContentPaddingLeft: "40px",
  rowContentPaddingRight: "40px",
};

const Qna = () => {
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
    <div className="my-[10rem]">
      <p className="text-[var(--prime-nine)] text-center sm:text-2xl text-lg">
        FAQ
      </p>
      <p className="text-center sm:text-6xl text-2xl  my-8">
        Questions & Answers
      </p>
      <div
        className="mx-auto w-[90%] my-6 bg-[var(--prime-four)] "
        data-aos="fade-up"
      >
        <div className="  flex flex-col p-12 my-6">
          {" "}
          <Faq data={data} styles={styles} />
        </div>
      </div>
    </div>
  );
};
export default Qna;
