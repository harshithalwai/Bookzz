import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const coursesBox = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setbook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  const filterBook = book.filter((item) => {
    return item.category == "Paid";
  });

  return (
    <>
      <div className="mt-5 mb-10 md:ml-28 overflow-x-hidden md:overflow-visible h-full">
        <div className="slider-container  md:ml-0 grid grid-cols-1 md:grid-cols-3 ">
          {filterBook.map((item) => {
            return (
              <div className="mb-12 " key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default coursesBox;
