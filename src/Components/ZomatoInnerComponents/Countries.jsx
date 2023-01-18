import React from "react";
import { GoArrowDown } from "react-icons/go";
export default function Countries() {
  const countryOptions = [
    {
      id: 1,
      name: "India",
      code: "in",
      src: "https://flagcdn.com/w40/in.jpg",
    },
    {
      id: 2,
      name: "Australia",
      code: "au",
      src: "https://flagcdn.com/w40/au.jpg",
    },
    {
      id: 3,
      name: "Brazil",
      code: "br",
      src: "https://flagcdn.com/w40/br.jpg",
    },
    {
      id: 4,
      name: "Canada",
      code: "ca",
      src: "https://flagcdn.com/w40/ca.jpg",
    },
    { id: 5, name: "Chile", code: "cl", src: "https://flagcdn.com/w40/cl.jpg" },
    {
      id: 6,
      name: "CzechR",
      code: "cz",
      src: "https://flagcdn.com/w40/cz.jpg",
    },
    {
      id: 7,
      name: "Indonesia",
      code: "id",
      src: "https://flagcdn.com/w40/id.jpg",
    },
    {
      id: 8,
      name: "Ireland",
      code: "ie",
      src: "https://flagcdn.com/w40/ie.jpg",
    },
    { id: 9, name: "Italy", code: "it", src: "https://flagcdn.com/w40/it.jpg" },
    {
      id: 10,
      name: "Lebanon",
      code: "lb",
      src: "https://flagcdn.com/w40/lb.jpg",
    },
    {
      id: 11,
      name: "Malaysia",
      code: "my",
      src: "https://flagcdn.com/w40/my.jpg",
    },
    {
      id: 12,
      name: "New Z",
      code: "nz",
      src: "https://flagcdn.com/w40/nz.jpg",
    },
    {
      id: 13,
      name: "Philippines",
      code: "ph",
      src: "https://flagcdn.com/w40/ph.jpg",
    },
    {
      id: 14,
      name: "Poland",
      code: "pl",
      src: "https://flagcdn.com/w40/pl.jpg",
    },
    {
      id: 15,
      name: "Portugal",
      code: "pt",
      src: "https://flagcdn.com/w40/pt.jpg",
    },
    {
      id: 16,
      name: "Qatar",
      code: "qa",
      src: "https://flagcdn.com/w40/qa.jpg",
    },
    {
      id: 17,
      name: "Singapore",
      code: "sg",
      src: "https://flagcdn.com/w40/sg.jpg",
    },
    {
      id: 18,
      name: "Slovakia",
      code: "sk",
      src: "https://flagcdn.com/w40/sk.jpg",
    },
    {
      id: 19,
      name: "S Africa",
      code: "za",
      src: "https://flagcdn.com/w40/za.jpg",
    },
    {
      id: 20,
      name: "Sri Lanka",
      code: "lk",
      src: "https://flagcdn.com/w40/lk.jpg",
    },
    {
      id: 21,
      name: "Turkey",
      code: "tr",
      src: "https://flagcdn.com/w40/tr.jpg",
    },
    {
      id: 22,
      name: "UnitedK",
      code: "gb",
      src: "https://flagcdn.com/w40/gb.jpg",
    },
  ];
  return (
    <div className="relative z-10 bg-white bottom-[450px] max-w-[700px] h-[330px] rounded-md  shadow-2xl">
      <div className=" p-2 px-4 text-black">
        <div className=" grid grid-cols-4 gap-2 py-1 ">
          {countryOptions.map((items) => (
            <div key={items.id}>
              <div className="">
                <a href="">
                  <div className="flex gap-5 p-2 hover:bg-slate-100 hover:rounded-lg">
                    <img src={items.src} alt=""></img>
                    <p>{items.name}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bottom-6  left-[512px]">
        <GoArrowDown size={60} className="fill-white" />
      </div>
    </div>
  );
}
