import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Course from "./Course/course";
import Contact from "./Contact/contact";
import Signup from "./component/signup";
const App = () => {
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
