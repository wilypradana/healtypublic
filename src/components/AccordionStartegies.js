import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function Strategies() {
  const [activeElement, setActiveElement] = useState("");
  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <section class="bg-[#fff] py-10" id="strategies">
        <h1 class="text-3xl text-center font-extrabold  p-4 bg-gradient-to-bl from-fuchsia-600 to-pink-600 text-transparent bg-clip-text ">
          Strategies
        </h1>
      </section>
      <section class="bg-[#fff] flex flex-col  items-center pb-5">
        <div className=" md:md:w-1/2 w-full  rounded-t-lg bg-[#dddddd] ">
          <h2 className="mb-0" id="headingTwo">
            <button
              className={`${
                activeElement === "element2"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              meditasi
              <span
                className={`${
                  activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              Meditasi dapat membantu menenangkan pikiran dan merilekskan tubuh.
              Hanya beberapa menit sehari sudah membantu mengurangi stres dan
              cemas.
            </div>
          </TECollapse>
        </div>
        {/*  */}
        <div className=" md:w-1/2 w-full bg-[#dddddd] ">
          <h2 className="mb-0" id="headingFour">
            <button
              className={`${
                activeElement === "element4"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Olahraga secara teratur
              <span
                className={`${
                  activeElement === "element4"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element4"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              Olahraga membantu melepaskan endrofin (hormon bahagia) ke dalam
              tubuh. Setidaknya 30 menit olahraga sehari seperti jogging, yoga,
              bersepeda, dll sangat dianjurkan.
            </div>
          </TECollapse>
        </div>
        {/*  */}

        {/*  */}
        <div className=" md:w-1/2 w-full bg-[#dddddd] ">
          <h2 className="mb-0" id="headingFive">
            <button
              className={`${
                activeElement === "element5"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
              type="button"
              onClick={() => handleClick("element5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Konsumsi makanan sehat
              <span
                className={`${
                  activeElement === "element5"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element5"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              Makanan seimbang yang kaya vitamin dan mineral dapat meningkatkan
              mood. Hindari makanan tinggi gula atau kafein yang dapat
              menurunkan mood.
            </div>
          </TECollapse>
        </div>
        {/*  */}

        {/*  */}
        <div className=" md:w-1/2 w-full bg-[#dddddd] ">
          <h2 className="mb-0" id="headingSix">
            <button
              className={`${
                activeElement === "element6"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
              type="button"
              onClick={() => handleClick("element6")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Tidur cukup
              <span
                className={`${
                  activeElement === "element6"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element6"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              Tidur yang cukup (7-9 jam) dapat memulihkan tubuh dan pikiran.
              Kurang tidur berdampak buruk pada kesejahteraan mental.
            </div>
          </TECollapse>
        </div>
        {/*  */}
        <div className="rounded-b-lg  md:w-1/2 w-full bg-[#dddddd] ">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className={`${
                activeElement === "element3"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Jalin kontak sosial
              <span
                className={`${
                  activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="!mt-0 !shadow-none"
          >
            <div className="px-5 py-4">
              Hubungan sosial yang sehat dengan teman dan keluarga dapat
              mengurangi stres dan memberi dukungan emosional. Nikmati waktu
              bersama mereka secara teratur.
            </div>
          </TECollapse>
        </div>
      </section>
    </>
  );
}
