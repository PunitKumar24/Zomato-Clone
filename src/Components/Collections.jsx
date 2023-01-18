import React from "react";

export default function Collections() {
  return (
    <div className="max-w-[1440px] p-4 py-14 h-auto mx-auto  ">
      <h1 className="font-nanumG text-4xl">Collections</h1>
      <div className="flex justify-between">
        <p className="font-nanumG text-xl text-gray-600 mb-8">
          Explore curated list of top restaurants, cafe, pubs, and bars in Delhi
          NCR, based on trends
        </p>
        <p className="text-orange-400">All collections in Delhi NCR</p>
      </div>
      <div className="flex md:flex-rows-4 gap-6 mx-auto">
        {" "}
        {/*CARDS*/}
        <div className="rounded-xl relative shadow-2xl">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
            <p className="font-bold text-2xl px-2 pt-4  ">
              18 Best Insta-worthy Places
            </p>
            <p className="px-2">18 Places </p>
          </div>
          <div className=" h-[400px]  w-[140px] lg:h-[280px] lg:w-[260px]  ">
            <img
              className="rounded-xl h-[400px] w-[140px] lg:h-[280px] lg:w-[260px] object-cover "
              src="https://images.pexels.com/photos/5220092/pexels-photo-5220092.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="/"
            />
          </div>
        </div>
        {/*CARDS*/}
        <div className="rounded-xl relative shadow-2xl">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
            <p className="font-bold text-2xl px-2 pt-4  ">
              17 Romantic Dinings Places
            </p>
            <p className="px-2">17 Places </p>
          </div>
          <div className=" h-[400px]  w-[140px] lg:h-[280px] lg:w-[260px]  ">
            <img
              className="rounded-xl h-[400px] w-[140px] lg:h-[280px] lg:w-[260px] object-cover "
              src="https://images.pexels.com/photos/4258936/pexels-photo-4258936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="/"
            />
          </div>
        </div>
        {/*CARDS*/}
        <div className="rounded-xl relative shadow-2xl">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
            <p className="font-bold text-2xl px-2 pt-4  ">
              Top 10 Picks of the week
            </p>
            <p className="px-2">10 Places </p>
          </div>
          <div className=" h-[400px]  w-[140px] lg:h-[280px] lg:w-[260px]  ">
            <img
              className="rounded-xl h-[400px] w-[140px] lg:h-[280px] lg:w-[260px] object-cover "
              src="https://images.pexels.com/photos/5638750/pexels-photo-5638750.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="/"
            />
          </div>
        </div>
        {/*CARDS*/}
        <div className="rounded-xl relative shadow-2xl">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
            <p className="font-bold text-2xl px-2 pt-4  ">
              4 Celebrity Owned Places
            </p>
            <p className="px-2">4 Places </p>
          </div>
          <div className=" h-[400px]  w-[140px] lg:h-[280px] lg:w-[260px]  ">
            <img
              className="rounded-xl h-[400px] w-[140px] lg:h-[280px] lg:w-[260px] object-cover "
              src="https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
