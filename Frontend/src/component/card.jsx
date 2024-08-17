import React from "react";

const card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="card bg-base-100 w-96 shadow-xl  dark:bg-slate-900 dark:text-white cursor-pointer">
          <figure>
            <img src={item.img} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name} !
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.desc}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-5 py-4 hover:text-white hover:bg-pink-500 cursor-pointer duration-200 hover:font-semibold">
                {item.price} $
              </div>
              <div className="badge badge-outline px-5 py-4 hover:text-white hover:bg-pink-500 cursor-pointer duration-200 hover:font-semibold">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
