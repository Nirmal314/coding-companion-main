import React from "react";
import Navbar from "../components/Navbar";

function about() {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      {/* <Navbar /> */}
      <div className="flex items-center justify-center fixed h-[90vh] bottom-0 w-full bg-transparent">
        <div className="h-[90vh] w-full">
          <div className="absolute hidden md:block left-[15%] top-[20%] text-6xl md:text-9xl text-[#30353e] font-semibold blur-[5px]">
            {"{}"}
          </div>
          <div className="absolute hidden md:block left-[30%] top-[75%] text-6xl md:text-9xl text-[#30353e] font-semibold blur-[5px]">
            {"</>"}
          </div>
          <div className="absolute hidden md:block left-[80%] top-[32%] text-6xl md:text-9xl text-[#30353e] font-semibold blur-[5px]">
            {"</>"}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#141c28] text-white mont">
        <div className="mb-10 text-4xl font-semibold text-center md:text-6xl md:mb-20">
          What do we do?
        </div>
        <div className="w-full px-6 text-base font-normal text-center md:text-2xl md:w-3/4 md:px-10">
          A common problem faced by people who are interested in the field of
          competitive programming is that there is a large amount of websites
          that help with it, which creates confusion in tracking one’s progress
          and selecting the best websites to proceed with. This project
          <span className="font-bold"> {"Coding Companion"} </span>
          focuses on those individuals who use websites such as
          <span className="font-bold"> {"LeetCode, CodeChef, CodeForces"}</span>.
          Our website groups the problem statements with respect to the topic
          and shows the results from all of these websites. One can also track
          their progress and get their respective statistics. In short, users
          can use our website as an “all in one” source.
        </div>
      </div>
    </div>
  );
}

export default about;
