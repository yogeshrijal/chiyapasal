import React from "react";

export default function Cabin(prompt) {
  return (
    <section className="h-screen flex flex-col flex-1">
      <div className=" flex gap-3 relative group w-1/3rounded-md">
        <figure className="rounded-md overflow-hidden mt-3">
          <img
            src="/image/Tea.png"
            alt="image"
            className="rounded-md hover:opacity-50 transition duration-300"
          />
        </figure>
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="bg-black text-white font-semibold py-2 px-6 rounded-lg border-2 border-white shadow-lg hover:bg-white hover:text-black">
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
