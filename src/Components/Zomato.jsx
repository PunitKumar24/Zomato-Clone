import React, { useState } from "react";

import Countries from "../Components/ZomatoInnerComponents/Countries";
import Languages from "./ZomatoInnerComponents/Languages";
export default function Zomato() {
  const [showforregion, setShowforregion] = useState(true);
  const [showforlanguage, setShowforlanguage] = useState(true);

  return (
    <div className=" max-w-[1440px] h-auto mx-auto my-[300px] p-4 bg-[rgb(251,251,251)] ">
      {!showforregion ? (
        <div className="relative duration-300 z-[100%] top-[485px] left-[295px] w-[900px] h-auto">
          <Countries />
        </div>
      ) : (
        <div className="relative duration-300 z-[-100%] top-[485px] left-[400px] w-[900px] h-auto"></div>
      )}
      {!showforlanguage ? (
        <div className="relative duration-300 z-[-100%] top-[485px] left-[878px] w-[900px] h-auto">
          <Languages />
        </div>
      ) : (
        <div className="relative duration-300 z-[100%] top-[485px] left-[970px] w-[900px] h-auto"></div>
      )}

      <div className="lg:m-10 lg:mx-16 m-4 flex justify-between">
        <div>
          <img
            className="h-auto w-[140px]"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt=""
          ></img>
        </div>

        <div className=" flex gap-8 relative right-[70px]">
          <button
            onClick={() => {
              setShowforregion(!showforregion);
            }}
            className="border-2 px-2 py-2 border-gray-600 rounded-lg "
          >
            Region
          </button>

          <button
            onClick={() => {
              setShowforlanguage(!showforlanguage);
            }}
            className="border-2 px-1 py-1 border-gray-600 rounded-lg"
          >
            Language
          </button>
        </div>
      </div>
      <div className=" flex font-extrabold lg:text-sm  lg:m-10 lg:mx-16 lg:gap-28 text-xs gap-6">
        <div className="font-montserrat  ">
          <h1 className="">ABOUT ZOMATO</h1>
          <div>
            <ul className="py-2">
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Who We Are</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Blog</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Who With Us</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Investor Relations</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Report Fraud</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Contact Us</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-montserrat ">
          <h1 className="">ZOMAVERSE</h1>
          <div>
            <ul className="py-2">
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Zomato</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Blinkit</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Feeding India</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Hyperpure</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Zomaland</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid">
          <div className="font-montserrat ">
            <h1 className="">FOR RESTAURANTS</h1>
            <div>
              <ul className="py-2">
                <li className="py-1">
                  <a href="">
                    <p className="text-gray-400">Partner With Us</p>
                  </a>
                </li>
                <li className="py-1">
                  <a href="">
                    <p className="text-gray-400">Apps For You</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="font-montserrat ">
            <h1 className="">FOR ENTERPRISES</h1>
            <div>
              <ul className="py-2">
                <li className="py-1">
                  <a href="">
                    <p className="text-gray-400">Zomato For Work</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="font-montserrat ">
          <h1 className="">LEARN MORE</h1>
          <div>
            <ul className="py-2">
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Privacy</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Security</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Terms</p>
                </a>
              </li>
              <li className="py-1">
                <a href="">
                  <p className="text-gray-400">Sitemap</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-montserrat grid  ">
          <h1 className="">SOCIAL LINKS</h1>
          <div className="flex gap-2 relative top-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 cvuzKA"
            >
              <path
                d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM7.0625 8.375H4.75V15.4375H7.0625V8.375ZM7.25 6.1875C7.25 5.5 6.75 5 5.9375 5C5.125 5 4.5625 5.5 4.5625 6.1875C4.5625 6.875 5.0625 7.4375 5.875 7.4375C6.6875 7.4375 7.25 6.875 7.25 6.1875ZM15.5 11.375C15.5 9.1875 14.3125 8.1875 12.8125 8.1875C11.5625 8.1875 11 8.875 10.6875 9.375V8.375H8.375C8.375 9.0625 8.375 15.4375 8.375 15.4375H10.6875V11.5C10.6875 11.3125 10.6875 11.0625 10.75 10.9375C10.9375 10.5 11.3125 10.0625 11.9375 10.0625C12.75 10.0625 13.125 10.6875 13.125 11.6875V15.4375H15.4375C15
          .5 15.4375 15.5 11.375 15.5 11.375Z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 cvuzKA"
            >
              <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375ZM13 6.8125C12.6875 6.8125 12.375 7.0625 12.375 7.4375C12.375 7.8125 12.625 8.0625 13 8.0625C13.375 8.0625 13.625 7.8125 13.625 7.4375C13.625 7.0625 13.3125 6.8125 13 6.8125ZM10.1875 7.5C8.75 7.5 7.5 8.6875 7.5 10.1875C7.5 11.6875 8.6875 12.875 10.1875 12.875C11.6875 12.875 12.875 11.6875 12.875 10.1875C12.875 8.6875 11.6875 7.5 10.1875 7.5ZM10.1875 8.4375C11.125 8.4375 11.9375 9.1875 11.9375 10.1875C11.9375 11.1875 11.1875 11.9375 10.1875 11.9375C9.25 11.9375 8.4375 11.1875 8.4375 10.1875C8.4375 9.1875 9.25 8.4375 10.1875 8.4375Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 cvuzKA"
            >
              <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.0625 8.125V8.5L9.6875 8.4375C8.3125 8.25 7.125 7.6875 6.125 6.6875L5.625 6.1875L5.5 6.5625C5.25 7.375 5.375 8.25 5.9375 8.8125C6.25 9.125 6.1875 9.1875 5.6875 9C5.5 8.9375 5.375 8.875 5.3125 8.9375C5.25 9 5.4375 9.6875 5.5625 9.9375C5.75 10.3125 6.1875 10.6875 6.5625 10.875L6.9375 11.0625H6.5C6.0625 11.0625 6.0625 11.0625 6.125 11.25C6.3125 11.75 6.875 12.25 7.5625 12.5L8 12.6875L7.625 12.9375C7 13.3125 6.3125 13.5 5.625 13.5C5.3125 13.5 5 13.5625 5 13.5625C5 13.625 5.9375 14.0625 6.4375 14.25C8.0625 14.75 9.9375 14.5 11.375 13.6875C12.375 13.0625 13.375 11.875 13.875 10.75C14.125 10.125 14.375 9 14.375 8.5C14.375 8.1875 14.4375 8.125 14.8125 7.6875C15.0625 7.4375 15.3125 7.1875 15.3125 7.0625C15.375 6.9375 15.375 6.9375 15 7.0625C14.375 7.3125 14.25 7.25 14.625 6.875C14.875 6.625 15.125 6.1875 15.125 6.0625C15.125 6.0625 15 6.0625 14.875 6.125C14.75 6.1875 14.4375 6.3125 14.1875 6.375L13.8125 6.5L13.5 6.25C13.3125 6.125 13 5.9375 12.875 5.9375C12.5 5.8125 11.9375 5.8125 11.5625 6C10.5625 6.25 10 7.1875 10.0625 8.125Z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 cvuzKA"
            >
              <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM15.1875 7.4375C15.0625 7 14.6875 6.625 14.25 6.5C13.4375 6.25 10.1875 6.25 10.1875 6.25C10.1875 6.25 6.9375 6.25 6.125 6.5C5.6875 6.625 5.3125 7 5.1875 7.4375C5 8.25 5 10 5 10C5 10 5 11.75 5.25 12.5625C5.375 13 5.75 13.375 6.1875 13.5C7 13.75 10.25 13.75 10.25 13.75C10.25 13.75 13.5 13.75 14.3125 13.5C14.75 13.375 15.125 13 15.25 12.5625C15.5 11.75 15.5 10 15.5 10C15.5 10 15.4375 8.25 15.1875 7.4375ZM9.25 11.75V8.5L11.875 10.125L9.25 11.75Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 cvuzKA"
            >
              <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"></path>
            </svg>
          </div>
          <div>
            <a href="">
              <img
                alt="image"
                className="lg:w-[150px] lg:h-auto relative "
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              ></img>
            </a>
            <a href="">
              <img
                alt="image"
                className="lg:w-[150px] lg:h-auto relative lg:top-3"
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-16">
        <div className="border-2 bg-slate-200"></div>
        <div>
          <p className="text-gray-400 py-4">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2023 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
