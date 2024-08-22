import React from "react";

export default function Table(prompt) {
  return (
    <section className="text-center">
      <div className="relative group">
        <figure className="w-full  rounded-xl hover:opacity-15">
          <img src="" alt="image" className="hover:opacity-15" />
        </figure>
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-300">
          <div className="bg-black text-white font-semibold py-2 px-6 rounded-lg border-2 border-white  hover:bg-white hover:text-black">
            Select
          </div>
        </button>
      </div>
      <header className="font-bold font-mono italic text-4xl pb-3">
        {prompt.heading}
      </header>
    </section>
  );
}
