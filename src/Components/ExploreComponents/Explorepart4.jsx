import React, { useState } from "react";
import { citiesDatas } from "../../Data/data";
export default function Explorepart4() {
  const [citiesData, setCitiesData] = useState(citiesDatas);
  const [list, setList] = useState(true);
  const [showMore, setShowMore] = useState(true);
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
  return (
    <div>
      <div className="max-w-[1640px] h-auto mx-auto relative bottom-60 bg-[#fafbfc]">
        <div className=" m-16 ">
          <div className=" font-extrabold ">
            <h1 className="font-montserrat text-gray-800 py-1 text-4xl"></h1>
            <div className="">
              {showMore
                ? citiesData.map((item) => (
                    <div
                      key={item.id}
                      className=" bg-white mx-1 my-5  font-montserrat text-[20px] border-2  border-gray-200 rounded-xl p-4 "
                    >
                      <div className="flex justify-between">
                        <p className="text-black py-1 ">{item.para}</p>{" "}
                        <button
                          onClick={() => {
                            setShowMore(!showMore);
                          }}
                          className=" font-montserrat text-xl  cursor-pinter  "
                        >
                          <p className="flex justify-center">
                            {showMore ? "see more " : "see less"}
                          </p>
                        </button>
                      </div>
                    </div>
                  ))
                : citiesData.map((item) => (
                    <div
                      key={item.id}
                      className=" bg-white mx-1 my-5  font-montserrat text-[20px] border-2  border-gray-200 rounded-xl p-4 "
                    >
                      <div className="flex justify-between">
                        <p className="text-black py-1 ">{item.para}</p>{" "}
                        <button
                          onClick={() => {
                            setShowMore(!showMore);
                          }}
                          className=" font-montserrat text-xl  cursor-pinter  "
                        >
                          <p className="flex justify-center">
                            {showMore ? "see more " : "see less"}
                          </p>
                        </button>
                      </div>
                      <div>
                        {citiesData.map((item) => (
                          <div className="grid grid-cols-4  ">
                            {" "}
                            {list
                              ? item.cities.slice(0, 11).map((list) => (
                                  <div
                                    key={list.id}
                                    className="text-sm  text-gray-500 h-7 "
                                  >
                                    <div className=" ">
                                      <ul className="">
                                        <li className="py-4">
                                          <a href="#">{list.City}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                ))
                              : item.cities.map((list) => (
                                  <div
                                    key={list.id}
                                    className="text-sm  text-gray-500 h-7 "
                                  >
                                    <div className=" ">
                                      <ul className="">
                                        <li className="lg:py-4 py-0 text-xs">
                                          <a href="#">{list.City}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                          </div>
                        ))}
                        <div className="relative lg:top-0 lg:left-[980px]">
                          <button
                            onClick={() => {
                              setList(!list);
                            }}
                            className="  text-sm  text-gray-500 h-7  cursor-pinter xl "
                          >
                            <p className="flex justify-center">
                              {showMore ? "see more " : "see less"}{" "}
                              <div className="relative top-[5px] left-4">
                                {down}
                              </div>
                              <div className="relative top-[5px] left-4">
                                {up}
                              </div>
                            </p>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
