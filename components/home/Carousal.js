import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        dynamicBullets: true,
      }} sr
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="w-full mb-10 sm:mb-20 p-2"
      style={{
        width: "100%",
        height: "90vh", /* Set the initial height of the carousel; adjust as needed */
      }}
      breakpoints={{
        // Adjust the image size on larger screens (min-width: 768px) to show faces properly
        768: {
          height: "5vh",
        },
      }}
    >
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/01.png"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/02.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/03.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/04.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/05.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/06.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/07.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/08.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/09.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/10.jpg"
          alt=""
          className="w-full object-cover"
          style={{
            maxHeight: "100%", /* To prevent the image from stretching beyond its original size */
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
