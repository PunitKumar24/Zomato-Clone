import React from "react";
import { GoArrowDown } from "react-icons/go";
export default function Languages() {
  const lang = [
    { id: 1, langType: "English" },
    { id: 2, langType: "Türkçe" },
    { id: 3, langType: "हिंदी" },
    { id: 4, langType: "Português (BR)" },
    { id: 5, langType: "Indonesian" },
    { id: 6, langType: "Português (PT)" },
    { id: 7, langType: "Español" },
    { id: 8, langType: "Čeština" },
    { id: 9, langType: "Slovenčina" },
    { id: 10, langType: "Polish" },
    { id: 11, langType: "Italian" },
    { id: 12, langType: "Vietnamese" },
  ];
  return (
    <div className="relative z-10 bg-white bottom-[450px] max-w-[130px] h-[400px] rounded-md  shadow-2xl">
      <div>
        {lang.map((langData) => (
          <div className="p-1" key={langData.id}>
            <a className="hover:bg-slate-300 p-1 rounded-md" href="">
              {langData.langType}
            </a>
          </div>
        ))}
      </div>
      <div className="relative bottom-4  left-[35px]">
        <GoArrowDown size={60} className="fill-white" />
      </div>
    </div>
  );
}
