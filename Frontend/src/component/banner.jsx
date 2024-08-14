import React from "react";
import Ban from "../../public/img/banner.avif";
const banner = () => {
  return (
    <>
      <div className="container w-dvw md:h-dvh md:pt-[5%] pt-[8%] ">
        <div className="cont md:h-[80%] w-full  flex flex-col md:flex-row md:px-16 p-10">
          <div className="det md:w-1/2 h-full flex flex-col justify-evenly md:pl-7 order-2 md:order-1">
            <div className="heading text-4xl font-semibold w-full md:w-[75%]">
              Hello , Welcome here to learn something{" "}
              <span className="text-pink-400">new everyday !!!</span>
            </div>
            <div className="detail text-xl md:w-[90%] w-full text-justify md:mt-0 mt-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias totam dolores velit temporibus maxime iure rerum
              deserunt natus ut? Commodi numquam fugit nostrum quibusdam.
            </div>
            <div className="search w-[85%] md:mt-0 mt-6">
              <label className="input input-bordered flex items-center gap-2 bg-transparent dark:text-white dark:border-white dark:outline-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 "
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>
            <div className="butn md:mt-0 mt-6">
              {" "}
              <button className="btn btn-secondary px-7">Submit</button>
            </div>
          </div>
          <div className="pic md:w-1/2 h-full order-1 md:order-2">
            <img src={Ban} alt="" className="w-full h-full rounded-md" />
          </div>
        </div>

        <div className="md:p-0 md:px-24 md:mt-1  p-10 pt-0">
          <div className="text-2xl mb-1">Free Offered Courses</div>
          <div className=" text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            totam cumque nihil. Mollitia, accusamus nemo porro consectetur,
            saepe laborum necessitatibus quas totam vitae, quo debitis.
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
