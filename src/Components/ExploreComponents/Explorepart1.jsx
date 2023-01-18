import React, { useState } from "react";
import { cuisineData, restaurantDatas } from "../../Data/data";

export default function Explorepart1() {
  const [cuisineDatas, setdatas] = useState(cuisineData);

  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <div className="max-w-[1640px] h-auto mx-auto relative bottom-60 bg-[#fafbfc]">
        <div className=" m-16 ">
          <div className=" font-extrabold ">
            <h1 className="font-montserrat text-gray-800 py-1 text-4xl">
              {" "}
              Explore options near me
            </h1>
            <div className="">
              {showMore
                ? cuisineDatas.map((item) => (
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
                : cuisineDatas.map((item) => (
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
                        {cuisineDatas.map((item) => (
                          <div className="grid grid-cols-4  ">
                            {" "}
                            {item.data.map((list) => (
                              <div
                                key={list.id}
                                className="text-sm  text-gray-500 h-7 "
                              >
                                <div className=" ">
                                  <ul className="">
                                    <li className="lg:py-4 py-0 text-xs">
                                      <a href="#">{list.cuisines}</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
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
