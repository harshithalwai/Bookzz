import React from "react";
import CoursesBox from "./coursesBox";
import { Link } from "react-router-dom";
const courses = () => {
  return (
    <>
      <div className="h-full pt-32 px-16 md:px-32 mb-20">
        <div className="heading text-4xl font-semibold w-full md:text-center">
          We&apos;re delighted to have you{" "}
          <span className="text-pink-400">Here! :)</span>
        </div>
        <div className="text-xl  w-full  mt-8 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
          accusamus accusantium sed architecto odio, nisi expedita quas quidem
          nesciunt debitis dolore non aspernatur praesentium assumenda sint
          quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut.
          Nobis quisquam reicndis sunt quis sed magnam consequatur!
        </div>
        <div className="mt-10">
          <Link to="/">
            <div className="butn md:mt-0  text-center ">
              {" "}
              <button className="btn btn-secondary px-7">Back</button>
            </div>
          </Link>
        </div>
      </div>
      <CoursesBox />
    </>
  );
};

export default courses;
