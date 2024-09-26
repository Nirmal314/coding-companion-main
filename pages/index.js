import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import lc from "../public/LC_white.png";
import cf from "../public/CF_white.png";
import cc from "../public/CC_white.png";
import lcc from "../public/LC_color.png";
import cfc from "../public/CF_color.png";
import ccc from "../public/CC_color.png";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

function Home() {
  const ref = useRef(null);

  function handleOverCC() {
    const ccc = document.querySelector("#ccc_id");
    ccc.style.transition = "all 0.25s ease-in-out";
    ccc.style.opacity = 1;
  }

  function handleLeaveCC() {
    const ccc = document.querySelector("#ccc_id");
    ccc.style.opacity = 0;
  }

  function handleOverLC() {
    const lcc = document.querySelector("#lcc_id");
    lcc.style.transition = "all 0.25s ease-in-out";
    lcc.style.opacity = 1;
  }

  function handleLeaveLC() {
    const lcc = document.querySelector("#lcc_id");
    lcc.style.opacity = 0;
  }

  function handleOverCF() {
    const cfc = document.querySelector("#cfc_id");
    cfc.style.transition = "all 0.25s ease-in-out";
    cfc.style.opacity = 1;
  }

  function handleLeaveCF() {
    const cfc = document.querySelector("#cfc_id");
    cfc.style.opacity = 0;
  }

  const [text, count] = useTypewriter({
    words: ["At one place"],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1000,
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start w-full h-screen">
        <div className="absolute bottom-0 flex items-center justify-center w-full h-screen bg-transparent">
          <div className="h-[90vh] w-full hidden md:block">
            <div className="absolute left-[15%] top-[20%] text-6xl md:text-9xl text-[#30353e] font-semibold blur-[5px]">
              {"{}"}
            </div>
            <div className="absolute left-[30%] top-[75%] text-6xl md:text-9xl text-[#30353e] font-semibold blur-[5px]">
              {"</>"}
            </div>
            <div className="absolute left-[80%] top-[32%] text-6xl md:text-9xl text-[#30353e] font-semibold blur-[5px]">
              {"</>"}
            </div>
          </div>
        </div>
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center justify-center h-screen w-full bg-[#141c28] text-white"
        >
          <div className="mb-6 text-4xl font-black text-center md:text-6xl">
            Powerful For{" "}
            <span className="text-[#43c0f5]">{"{Developers}"}</span>
          </div>
          <div className="mb-10 text-4xl font-black text-center md:text-6xl">
            Fast For Everyone
          </div>
          <button
            className="bg-[#43c0f5] z-10 text-md md:text-lg transition-all w-[60%] md:w-[20%] text-[#141c28] font-semibold py-3 px-6 rounded-xl hover:scale-105"
            onClick={() => {
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore More
          </button>
        </motion.div>
      </div>
      <div
        className="flex flex-col w-full justify-start items-center h-fit bg-[#0e1524] pb-32"
        ref={ref}
      >
        <p className="mt-20 mb-8 text-4xl font-semibold text-center text-white md:text-6xl">
          Keep an eye on <br /> All of your progress
        </p>
        <div className="tracking-[1.50rem] uppercase text-md md:text-2xl text-white text-ceter font-thin mb-28">
          {/* <div className="text-lg font-thin tracking-wide text-center text-white md:text-2xl mb-28"> */}
          <span>{text}</span>
          <Cursor cursorColor="#43c0f5"></Cursor>
        </div>

        <div className="flex flex-col w-full px-4 gap-y-10 lg:gap-x-96">
          <div className="flex flex-col justify-around w-full mb-0 md:flex-row gap-y-10 md:gap-y-0 md:mb-16">
            <div
              className="bg-[#141c28] flex justify-center items-center rounded-2xl shadow-all hover:shadow-brightcard w-full md:w-[27rem] text-white text-xl h-72 cursor-pointer relative mb-8 md:mb-0"
              onMouseOver={handleOverLC}
              onMouseLeave={handleLeaveLC}
            >
              <Image
                src={lc}
                height={150}
                width={150}
                className="transition-all"
                id="lc_id"
              />
              <Image
                src={lcc}
                height={150}
                width={150}
                className="absolute transition-all opacity-0"
                id="lcc_id"
              />
            </div>

            <div
              className="flex flex-col justify-center w-full md:w-[27rem] text-white font-normal text-lg md:text-xl h-72 cursor-pointer"
              style={{ transition: "all 0.5s ease-in-out" }}
              onMouseOver={handleOverLC}
              onMouseLeave={handleLeaveLC}
            >
              <div className="p-5 mb-8 text-2xl font-black text-center md:text-4xl md:text-left">LeetCode</div>
              <p className="p-5 text-justify md:text-left">
                Leetcode is worth not just for their problems or OJ, but for community and
                the button "Discuss". For some problems you might read up to 5 different
                approaches realized on a variety of languages with human explanation.
                Leetcode is a great platform to polish your programming skills.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-around w-full mb-0 md:flex-row gap-y-10 md:gap-y-0 md:mb-16">
            <div
              className="flex flex-col justify-center w-full md:w-[27rem] text-white font-normal text-lg md:text-xl h-72 cursor-pointer"
              onMouseOver={handleOverCC}
              onMouseLeave={handleLeaveCC}
            >
              <div className="p-5 mb-8 text-2xl font-black text-center md:text-4xl md:text-left">CodeChef</div>
              <p className="p-5 text-justify md:text-left">
                CodeChef is based on time and space optimizations when your real
                implementation. It is a useful tool for advanced software engineers
                looking to prepare for their technical interviews. Though they provide
                access to user solutions and other resources.
              </p>
            </div>

            <div
              className="bg-[#141c28] flex justify-center items-center rounded-2xl shadow-all hover:shadow-brightcard w-full md:w-[27rem] text-white text-xl h-72 cursor-pointer relative mb-8 md:mb-0"
              onMouseOver={handleOverCC}
              onMouseLeave={handleLeaveCC}
            >
              <Image
                src={cc}
                height={150}
                width={150}
                className="transition-all"
              />
              <Image
                src={ccc}
                height={150}
                width={150}
                className="absolute transition-all opacity-0"
                id="ccc_id"
              />
            </div>
          </div>

          <div className="flex flex-col justify-around w-full mb-0 md:flex-row gap-y-10 md:gap-y-0 md:mb-16">
            <div
              className="bg-[#141c28] flex justify-center items-center rounded-2xl shadow-all hover:shadow-brightcard w-full md:w-[27rem] text-white text-xl h-72 cursor-pointer"
              onMouseOver={handleOverCF}
              onMouseLeave={handleLeaveCF}
            >
              <Image
                src={cf}
                height={150}
                width={150}
                className="transition-all"
              />
              <Image
                src={cfc}
                height={150}
                width={150}
                className="absolute transition-all opacity-0"
                id="cfc_id"
              />
            </div>

            <div
              className="flex flex-col justify-center w-full md:w-[27rem] text-white font-normal text-lg md:text-xl h-72 cursor-pointer"
              onMouseOver={handleOverCF}
              onMouseLeave={handleLeaveCF}
            >
              <div className="p-5 mb-8 text-2xl font-black text-center md:text-4xl md:text-left">CodeForces</div>
              <p className="p-5 text-justify md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla
                expedita fugit temporibus veniam? Nam omnis quaerat corporis culpa
                reiciendis quae facilis pariatur odio eaque.
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Home;
