import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import jano from "../assest/logo.png";
import Icon from "../assest/loginicon.svg";
import { Link } from "react-router-dom";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
const navigation = [
  { name: "Home", href: "#", current: true },
  {
    name: "Blog",
    href: "#",
    current: false,
  },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(id) {
  const [navbarColor, setNavbarColor] = useState(false);

  const handleClick = () => {
    if (window.scrollY > 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleClick);
  }, []);
  return (
    <Disclosure as="nav" className={navbarColor ? "navbar_color" : ""}>
      {({ open }) => (
        <>
          <div className=" px-2 sm:px-6 lg:px-8 py-5">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center sm:ml-0 ml-7">
                  <img
                    className="h-8 mx-2 w-auto"
                    src={jano}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:mx-auto ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    <Link
                      to="/"
                      className={classNames(
                        navigation[0].current
                          ? "underline text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2  font-medium text-2xl"
                      )}
                    >
                      {navigation[0].name}
                    </Link>
                    <Link
                      to="/blog"
                      className={classNames(
                        navigation[1].current
                          ? "underline text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2  font-medium text-2xl"
                      )}
                    >
                      {navigation[1].name}
                    </Link>

                    {/* <Link
                      to="/blog"
                      className={classNames(
                        navigation[1].current
                          ? "underline text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2  font-medium text-2xl"
                      )}
                    >
                      {navigation[1].name}
                   
                     
                    </Link> */}
                    {/* <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          className={classNames(
                            navigation[1].current
                              ? "underline text-white"
                              : "text-white hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 flex items-center font-medium text-2xl"
                          )}
                        >
                          <span>{navigation[1].name}</span>
                          <ChevronDownIcon
                            className="ml-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="blog/category"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Blogs with Sidebar
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Blog Details
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu> */}

                    <Link
                      to="/contact"
                      className={classNames(
                        navigation[2].current
                          ? "underline text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2  font-medium text-2xl"
                      )}
                    >
                      {navigation[2].name}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="sm:px-2 px-0">
                  <a href="signin.html">
                    <span className="text-white sm:me-5 me-2 sm:text-2xl text-lg">
                      {" "}
                      <img src={Icon} alt="" className="inline-block mx-2 " />
                      login
                    </span>
                  </a>
                  <a
                    href="signup.html"
                    className="signin_btn text-white signup-btn-two fw-500 tran3s d-none d-lg-block sm:text-2xl text-lg"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="text-lg space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2  font-medium text-lg"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
