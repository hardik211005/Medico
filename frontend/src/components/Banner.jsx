import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-green-900 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 overflow-hidden">
      {/* left side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 ">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment </p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-gray-200 text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full  mt-6 hover:scale-105 transition-all font-bold bg-green-200 hover:bg-white hover:text-black"
        >
          Create account{" "}
        </button>
      </div>
      {/*right side*/}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative h-full">
        <img
          className="w-full h-full object-cover object-bottom"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
