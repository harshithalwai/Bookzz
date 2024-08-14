import React from "react";
import List from "../../public/list.json";
import Card from "./card";

const coursesBox = () => {
  List.map((book) => {
    if (book.category == "Paid") {
      return (book.price = 99);
    }
  });
  const filterBook = List.filter((item) => {
    return item.category == "Paid";
  });

  return (
    <>
      <div className="mt-5 mb-10 md:ml-28 overflow-x-hidden md:overflow-visible h-full">
        <div className="slider-container ml-6 md:ml-0 grid grid-cols-1 md:grid-cols-3 ">
          {filterBook.map((item) => {
            return (
              <div className="mb-12" key={item.id}>
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
