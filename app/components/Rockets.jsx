import React from "react";
import { cardInfo } from "@/utils/cardInfo";
const Rockets = () => {
  return (
    <>
      <section
        id="rockets"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          {cardInfo.map((items) => (
            <li
              key={items.id}
              className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black"
            >
              <img src={items.img} alt="" className="w-1/2 mb-6" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                {items.name}
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                {items.price}
              </p>
              <p className="sm:hidden text-3xl text-center mt-2 text-slate-900 dark:text-white">
                {items.subHead}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </>
  );
};

export default Rockets;
