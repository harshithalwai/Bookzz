import React from "react";
import { useState, useEffect } from "react";
import ThemeController from "./themeController";
import Login from "./Login";
const navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  const lst = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`container mx-auto fixed top-0  w-full z-50 dark:bg-slate-900 dark:text-white `}
      >
        <div
          className={`navbar  w-screen px-4 py-5 md:px-16 md:py-3 ${
            sticky
              ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out  w-screen  dark:bg-slate-800 dark:text-white"
              : ""
          }`}
        >
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {lst}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer" href="/">
              Bookzz..
            </a>
          </div>
          <div className="navbar-end space-x-4">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{lst}</ul>
              <div className="hidden md:block ">
                <label className="input input-bordered flex items-center gap-2 ">
                  <input
                    type="text"
                    className="grow outline-none border-none text-black "
                    placeholder="Search"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
            <ThemeController />
            <div className="mx-auto bg-black text-white flex items-center px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer font-semibold">
              <a
                className=""
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
