import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
export default function GetApp() {
  const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [numberValid, setNumberVaild] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const emailValidation = () => {
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regex.test(email)) {
      setMessage("Correct");
    } else if (!regex.test(email) && email !== "") {
      setMessage("Please enter your email id");
    } else {
      setMessage("");
    }
  };
  const checknumbervalid = () => {
    if (value > 13 || value < 13) {
      setValue("Please enter your number");
    } else if ((value = 13)) {
      setValue("Correct!");
    } else {
      setValue("");
    }
  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  // const handleOnnumberChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // const numberValidation = (e) => {
  //   if (e.target.value > 10 || e.target.value < 10) {
  //     setNumberVaild("Please enter your number");
  //   } else {
  //     setNumberVaild("Correct");
  //   }
  // };
  const [radio, setRadio] = useState(true);
  return (
    <div className=" max-w-[1440px]  mx-auto my-[300px] p-4 bg-[rgb(254,249,249)]">
      {/* FLEX*/}
      <div className=" justify-center flex gap-x-5 my-[150px] lg:my-[80px]">
        {/*Phone photo*/}
        <div className="">
          <img
            className="w-auto  h-[290px] lg:m-20   "
            src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png"
            alt=""
          ></img>
        </div>
        <div className="py-10 relative lg:bottom-16 bottom-24">
          <h1 className="lg:text-5xl text-3xl lg:w-auto w-[250px] font-nanumG">
            Get the Zomato app
          </h1>

          <div className="text-gray-500 py-5 lg:w-[550px] w-[200px] ">
            <p className="lg:text-xl text-md ">
              We will send you a link, open it on your phone to download the app
            </p>
          </div>
          <div className="lg:p-1 p-0   ">
            <form>
              <input
                className="relative w-4 h-20"
                type="radio"
                name="type"
                value="email"
                onClick={() => {
                  setRadio(true);
                }}
              ></input>
              <label className=" relative left-[10px] bottom-[34px]">
                Email
              </label>

              <input
                className="relative lg:left-[100px] w-4 h-20 left-[50px]"
                type="radio"
                name="type"
                value="phone"
                onClick={() => {
                  setRadio(false);
                }}
              ></input>
              <label className="relative lg:left-[110px] lg:bottom-[33px] left-[60px] bottom-[34px]">
                Phone
              </label>
            </form>
          </div>
          {radio ? (
            <div>
              <div className="flex gap-2 py-6">
                <div className="border-2 rounded-lg  bg-white">
                  <input
                    className=" p-3 px-6 "
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChange}
                  ></input>
                </div>

                <div className="lg:p-3 lg:px-6 bg-[#ff4757] text-white rounded-lg">
                  <button className=" " onClick={emailValidation}>
                    <p className="hidden lg:flex ">Share App Link</p>
                    <p className="lg:hidden flex py-3 px-5 ">Share</p>
                  </button>
                  <p className=""> {message}</p>
                </div>
              </div>
              <div className=" grid grid-flow-row  relative lg:left-0 lg:top-0 left-2 top-9 ">
                <div className=" lg:top-[90px] top-[0px] ">
                  <p className="font-nanumG  text-gray-500">
                    Download app from
                  </p>
                </div>
                <div className="flex gap-5 h-auto w-[150px] py-5">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                    alt=""
                  ></img>
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="">
                <div className=" lg:flex  lg:w-[30px] lg:h-[11px] w-[5px] relative bottom-9 ">
                  <PhoneInput
                    value={value}
                    onChange={setValue}
                    placeholder="type here..."
                    defaultCountry="IN"
                    className="  lg:w-[60px] lg:py-5 w-[10px] py-3"
                  />
                  <div>
                    <button
                      className="bg-[#ff4757] rounded-lg text-white lg:h-[55px] lg:w-[170px] relative lg:left-[275px]"
                      onClick={() => {
                        checknumbervalid();
                      }}
                    >
                      <p className="hidden lg:flex justify-center">
                        Share App Link
                      </p>
                      <p className="lg:hidden flex py-3 px-5 ">Share</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" grid grid-flow-row relative lg:top-[90px] right-8 top-0">
                <div className=" lg:top-[90px] top-[0px] ">
                  <p className="font-nanumG  text-gray-500">
                    Download app from
                  </p>
                </div>
                <div className="flex gap-5 h-auto w-[150px] py-5">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                    alt=""
                  ></img>
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
