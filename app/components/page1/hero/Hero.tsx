import React from "react";
import Image from "next/image";
import SignUp from "../../signup/SignUp";
import ButtonLinkMail from "../../signup/ButtonLinkMail";
import imgSearch from "../../../../public/images/search.png";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-row justify-center items-center ">
        <div className="relative max-w-4xl mt-8 p-8 flex flex-row">
          {/* text */}
          <div className="w-3/5">
            <div className="grow-0 shrink h-auto flex flex-row justify-start items-center">
              <h1 className="relative text-6xl font-black bg-gradient-to-br from-cyan-400 via-purple-300 to-fuchsia-700 text-transparent bg-clip-text">
                <span className="text-blue-300">$</span>
                <span className="text-pink-300">0</span>MRR
              </h1>
              <span className="font-light ml-3 text-pink-500 ">
                Coming soon !
              </span>
            </div>
            {/* */}
            <div className="mt-4 font-extralight text-2xl flex flex-col justify-between">
              <div>Tired of everything being messy?</div>
              <div>
                Keep track of the things that{" "}
                <span
                  style={{
                    height: "100px" /* Adjust the height as needed */,
                    background: "linear-gradient(transparent 50%, #2395b2 50%)",
                  }}
                >
                  motivate you
                </span>{" "}
                in one place.{" "}
                <span
                  style={{
                    height: "100px" /* Adjust the height as needed */,
                    background: "linear-gradient(transparent 50%, #b5a52d 50%)",
                  }}
                >
                  Get inspired
                </span>
                , stay on track and finish it.
              </div>
              {/* form */}
              <div className=" mt-20 flex flex-col justify-start w-4/5">
                <SignUp />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="absolute bottom-0 right-0 w-1/2 h-full  flex flex-row justify-end">
            <Image
              src={"/images/search.png"}
              width={300}
              height={300}
              className="h-auto w-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
