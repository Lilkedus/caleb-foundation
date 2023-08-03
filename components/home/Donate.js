import React from "react";

export default function Donate() {
  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14" id="donate">
      <div className="flex flex-col md:flex-row pt-10 justify-center items-center">
        <div className="w-full sm:w-6/12 md:w-4/12 flex justify-center items-center">
          <img src="/donate.jpeg" alt="" className="w-full rounded-3xl" />
        </div>
        <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12 flex flex-col justify-center items-center px-4">
          <p className="text-4xl lg:text-5xl font-bold pt-10 md:pt-0">Donate</p>
          <p className="lg:text-lg 2xl:text-xl py-6 text-center">
            Remember that the happiest people are not those getting more, but
            those giving more.
          </p>
          <img src="/qr.png" alt="" className="rounded-sm w-6/12 sm:w-4/12 md:w-5/12 lg:w-3/12" />
          <a
            href="https://www.facebook.com/donate/862417271560140/"
            className="flex justify-center items-center p-3 px-6 w-max bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all ease-in-out duration-100 sm:scale-100 m-1.5"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
          >
            Donate now
          </a>
        </div>
      </div>
    </div >
  );
}
