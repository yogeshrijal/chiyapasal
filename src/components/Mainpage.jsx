import React from "react";

export default function Mainpage() {
  return (
    <section className="bg-slate-600 min-w-[130px] flex flex-col justify-between min-h-screen">
      <div>
        <figure className="w-24 mb-16">
          <img src="/image/Logo.png" alt="logo" />
        </figure>
        <ul className="flex flex-col gap-[40px] text-white mb-40 cursor-pointer">
          {[
            {
              src: "/image/home.png",
              alt: "Dashboard Icon",
              text: "Dashboard",
            },
            {
              src: "/image/gift.png",
              alt: "Offers Icon",
              text: "Offers",
            },
            { src: "/image/chair.png", alt: "Table Icon", text: "Cabins" },
            { src: "/image/checkout.png", alt: "Orders Icon", text: "Orders" },
            { src: "/image/diagram.png", alt: "Report Icon", text: "Report" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 hover:bg-gray-700 hover:rounded-lg p-2 transition-all"
            >
              <img src={item.src} alt={item.alt} className="w-6 h-6" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="relative px-5 py-3 text-gray-300 bg-gray-800 border border-red-600 rounded-full mt-40 hover:bg-slate-500">
          Exit
          <span className="absolute inset-0 w-full h-full rounded-full opacity-20 border-2 border-red-600"></span>
        </button>
      </div>
    </section>
  );
}
