import React from "react";

export default function Mainpage(prompt) {
  return (
    <section className="bg-slate-600 min-w-[130px] flex flex-col justify-between h-full ">
      <div>
        <figure className="w-24 mb-16">
          <img src="/image/logo.png.png" alt="logo" />
        </figure>
        <ul className="flex flex-col gap-[40px] text-white mb-40">
          <li className="flex items-center gap-2">
            <img
              src="/image/home.png"
              alt="Dashboard Icon"
              className="w-6 h-6"
            />
            Dashboard
          </li>
          <li className="flex items-center gap-2">
            <img
              src="/image/category.png"
              alt="Product Icon"
              className="w-6 h-6"
            />
            Product
          </li>
          <li className="flex items-center gap-2">
            <img src="/image/chair.png" alt="Table Icon" className="w-6 h-6" />
            Table
          </li>
          <li className="flex items-center gap-2">
            <img
              src="/image/checkout.png"
              alt="Orders Icon"
              className="w-6 h-6"
            />
            Orders
          </li>
          <li className="flex items-center gap-2">
            <img
              src="/image/diagram.png"
              alt="Report Icon"
              className="w-6 h-6"
            />
            Report
          </li>
        </ul>
      </div>
      <div>
        <button className="relative px-5 py-3 text-gray-300 bg-gray-800 border border-red-600 rounded-full mt-40">
          Exit
          <span className="absolute inset-0 w-full h-full rounded-full opacity-20 border-2 border-red-600"></span>
        </button>
      </div>
    </section>
  );
}
