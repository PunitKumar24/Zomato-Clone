import React, { useState } from "react";

import { data } from "../Data/data";
export default function Locations() {
  const [items, setItems] = useState(data);

  const [showMore, setShowMore] = useState(true);
  // const showMoreItems = () => {
  //   setVisible((prevvalue) => prevvalue + 19);
  // };
  // const showLessItems = () => {
  //   setVisible((prevvalue) => prevvalue - 19);
  // };
  console.log(data);
  const up = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#1C1C1C"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      aria-labelledby="icon-svg-title- icon-svg-desc-"
      role="img"
      class="sc-rbbb40-0 iwHbVQ"
    >
      <title>chevron-up</title>
      <path d="M15.54 13.44c-0.3 0.3-0.78 0.3-1.060 0l-4.48-4.46-4.46 4.46c-0.3 0.3-0.78 0.3-1.060 0s-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060z"></path>
    </svg>
  );
  const down = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#1C1C1C"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      aria-labelledby="icon-svg-title- icon-svg-desc-"
      role="img"
      class="sc-rbbb40-0 iwHbVQ"
    >
      <title>chevron-down</title>
      <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
    </svg>
  );
  const [click, setClick] = useState(true);
  return (
    <div className={click ? "max-w-[1440px] mx-auto p-4 py-14" : "h-[1020px] "}>
      <div>
        <div className="py-6">
          <h1 className="font-nanumG text-4xl">
            Popular localities in and around Delhi NCR
          </h1>
        </div>

        <div className=" h-[30px] lg:w-[1100px] sm:w-[600px]  grid grid-cols-3  gap-6 pt-4 ">
          {showMore
            ? items.slice(0, 5).map((item, index) => (
                <div
                  className=" font-nanumG text-lg text-gray-500 border-2 shadow-xl  border-gray-200 rounded-xl p-5 "
                  key={index}
                >
                  <div>{item.name} </div>
                  <div>{item.places} </div>
                </div>
              ))
            : items.map((item, index) => (
                <div
                  className=" border-2 shadow-xl  border-gray-200 rounded-xl p-5 "
                  key={index}
                >
                  <div>{item.name} </div>
                  <div>{item.places} </div>
                </div>
              ))}

          <button
            onClick={() => {
              setShowMore(!showMore);
              setClick(!click);
            }}
            className="  font-nanumG text-lg text-gray-500  cursor-pinter border-2 shadow-xl  border-gray-200 rounded-xl p-5  "
          >
            <p className="flex justify-center">
              {showMore ? "see more " : "see less"}
              <div className="relative top-[5px] left-4">{down}</div>
              <div className="relative top-[5px] left-4">{up}</div>
            </p>

            <div className="relative bottom-4"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
