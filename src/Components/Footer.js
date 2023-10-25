import Logo from "../assest/logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-evenly  flex-wrap text-white sm:text-xl text-base tracking-wide pb-[8rem]">
        <div className="sm:w-auto w-full pt-3 pb-5">
          <img src={Logo} />
        </div>
        <div className="sm:w-auto w-full ">
          <p className=" opacity-60 tracking-wider py-3 ">LINKS</p>
          <ul className="list">
            <li className="py-2">
              <a href="#">Home</a>
            </li>
            <li className=" py-2 ">
              <a>Pricing</a>
            </li>
            <li className=" py-2 ">
              <a href="#">About us</a>
            </li>
            <li className=" py-2 ">
              <a href="#">Service</a>
            </li>
            <li className=" py-2 ">
              <a href="#">Blog </a>
            </li>
          </ul>
        </div>
        <div className="sm:w-auto w-full">
          <p className=" opacity-60 tracking-wider  py-3">LINKS</p>{" "}
          <ul className="list">
            <li className="py-2">
              <a href="#">Home</a>
            </li>
            <li className=" py-2 ">
              <a>Pricing</a>
            </li>
            <li className=" py-2 ">
              <a href="#">About us</a>
            </li>
            <li className=" py-2 ">
              <a href="#">Service</a>
            </li>
            <li className=" py-2 ">
              <a href="#">Blog </a>
            </li>
          </ul>
        </div>
        <div className="sm:w-auto w-full">
          <p className=" opacity-60 tracking-wider py-3">LINKS</p>{" "}
          <ul className="list">
            <li className="py-2">
              <a href="#">Home</a>
            </li>
            <li className=" py-2 ">
              <a>Pricing</a>
            </li>
            <li className=" py-2 ">
              <a href="#">About us</a>
            </li>
            <li className=" py-2 ">
              <a href="#">Service</a>
            </li>
            <li className=" py-2 ">
              <a href="#">Blog </a>
            </li>
          </ul>
        </div>
        <div className="sm:w-auto w-full white-text">
          <p className=" opacity-60 tracking-wider py-3">LINKS</p>{" "}
          <div className="font-semibold pt-2 pb-4 text-xl">
            Join our newsletter
          </div>
          <form action="#" class="position-relative form-widget">
            <input type="email" placeholder="Enter your email" />
            <button class="tran3s fw-500 position-absolute">Sign Up</button>
          </form>
          <div className="opacity-60 py-4  text-base">
            We only send interesting and relevant emails.
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-evenly flex-wrap text-white sm:text-xl text-base pt-[2rem]">
        <div className="py-2">
          <a href="#">Privacy & Terms. </a>&nbsp;&nbsp;
          <a href="#">Contact Us</a>
        </div>
        <div className="opacity-60 py-2">Copyright @2022 janu inc.</div>
        <div className="flex py-2">
          <div className="px-3">
            {" "}
            <BiLogoFacebook size={30} />
          </div>
          <div className="px-3">
            {" "}
            <AiOutlineTwitter size={30} />
          </div>
          <div className="px-3">
            {" "}
            <FaLinkedinIn size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
