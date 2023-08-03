import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-200 h-[14rem] mt-12 bg-zinc-100">
        <div className=" relative w-full mx-auto container pt-20 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            <img src="/header_logo.png" alt="" className="h-12 scale-[1.5] lg:h-14 w-8/12 sm:w-auto self-center object-contain" />
            <div className="pt-6 text-sm text-color mb-10 f-f-l self-center">
              <span className="text-sm">
                <p>
                  Save Life With Penies © 2022. All Rights Reserved.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
