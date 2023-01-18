import React from "react";

export default function HeadlineCard() {
  return (
    <div className="max-w-[1440px] h-auto p-4 py-14 grid grid-cols-3 mx-auto ">
      {/*First card*/}
      <div className="h-[160px]  w-[180px] lg:h-[180px] lg:w-[360px] rounded-xl relative gap-2 lg:gap-1  hover:scale-105 duration-300 ">
        <img
          className=" h-[160px]  w-[180px] lg:h-[180px] lg:w-[360px] object-cover rounded-t-2xl"
          src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
        <div className=" font-nanumG p-4 relative top-[-8] border-2 shadow-lg border-gray-200 rounded-b-2xl border-full">
          <p className=" text-gray-600 text-xl">Order Online</p>
          <p className=" text-gray-500">Stay home and order to your doorstep</p>
        </div>
      </div>
      {/*Second card*/}
      <div className="h-[160px]  w-[180px] lg:h-[180px] lg:w-[360px] rounded-xl relative  hover:scale-105 duration-300">
        <img
          className=" h-[160px]  w-[180px] lg:h-[180px] lg:w-[360px] object-cover rounded-t-2xl"
          src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="/"
        />
        <div className=" font-nanumG p-4 relative top-[-8] border-2 shadow-lg border-gray-200 rounded-b-2xl border-full">
          <p className=" text-gray-600 text-xl">Dining</p>
          <p className=" text-gray-500">
            View the city's favorite dining venues
          </p>
        </div>
      </div>
      {/*Third card*/}
      <div className="h-[160px]  w-[180px] lg:h-[180px] lg:w-[360px] rounded-xl relative  hover:scale-105 duration-300">
        <img
          className="h-[160px]  w-[180px] lg:h-[180px] lg:w-[360px] object-cover rounded-t-2xl"
          src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
        <div className=" font-nanumG p-4 relative top-[-8] border-2 shadow-lg border-gray-200 rounded-b-2xl border-full">
          <p className=" text-gray-600 text-xl">Nightlife and Clubs</p>
          <p className=" text-gray-500">
            Explore the city's top nightlife outlets
          </p>
        </div>
      </div>
      <div className="py-12"></div>
    </div>
  );
}
