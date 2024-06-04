import React from "react";
import CardCloud from "./CardCloud";

const CloudInfo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row md:mx-16 md:mt-7 md:gap-9 md:ml-4 gap-2">
        <div className="flex flex-col items-center">
          <div className="z-0 flex items-center justify-center h-9 w-9 bg-blue-700 rounded-full">
            <div className="h-3 w-3 bg-gray-100 rounded-full"></div>
          </div>
          <div className=" -mt-1 md:h-40 h-80 w-2 shadow-2xl bg-white border border-gray-300 shadow-black"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col ml-4">
            <h1 className="text-lg text-black font-semibold">Step 1</h1>{" "}
            <h4 className="text-gray-600 text-xs">Connect to Cloud</h4>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-5">
            <CardCloud title="AWS" logo="/amazon.svg" />
            <CardCloud title="GCP" logo="/amazon.svg" />
          </div>
        </div>
      </div>

      <div className="flex flex-row md:mx-16 md:gap-9 md:ml-4 gap-2">
        <div className="flex flex-col items-center">
          <div className="z-0 flex items-center justify-center h-9 w-9 bg-blue-700 rounded-full">
            <div className="h-3 w-3 bg-gray-100 rounded-full"></div>
          </div>
          <div className=" -mt-1 md:h-40 h-80 w-2 shadow-2xl bg-white border border-gray-300 shadow-black"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col ml-4">
            <h1 className="text-lg text-black font-semibold">Step 2</h1>{" "}
            <h4 className="text-gray-600 text-xs">Connect to Source Code</h4>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-5">
            <CardCloud title="Github" logo="/amazon.svg" />
            <CardCloud title="Gitlab" logo="/amazon.svg" />
            <CardCloud title="Bitbucket" logo="/amazon.svg" />
          </div>
        </div>
      </div>

      <div className="flex flex-row md:mx-16 md:gap-9 md:ml-4 gap-2">
        <div className="flex flex-col items-center">
          <div className="z-0 flex items-center justify-center h-9 w-9 bg-blue-700 rounded-full">
            <div className="h-3 w-3 bg-gray-100 rounded-full"></div>
          </div>
          <div className=" -mt-2 rounded-full md:h-40 h-80 w-2 shadow-2xl bg-white border border-gray-300 shadow-black"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col ml-4">
            <h1 className="text-lg text-black font-semibold">Step 3</h1>{" "}
            <h4 className="text-gray-600 text-xs">Connect to Data Source</h4>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-5">
            <CardCloud title="MongoDB" logo="/amazon.svg" />
            <CardCloud title="RedisDB" logo="/amazon.svg" />
            <CardCloud title="Postgresql" logo="/amazon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInfo;
