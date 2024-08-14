import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/list.json";
import Card from "./card";

const boxContent = () => {
  let fliterBook = List.filter((book) => {
    return book.category == "Free";
  });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-5 mb-10 md:ml-28 overflow-x-hidden md:overflow-visible h-full">
        <div className="slider-container ml-6 md:ml-0">
          <Slider {...settings}>
            {fliterBook.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default boxContent;
