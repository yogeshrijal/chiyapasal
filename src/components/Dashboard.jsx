import React from "react";

export default function Dashboard(prompt) {
  return (
    <section className="h-screen flex flex-col flex-1">
      <div>
        <h1 className="mb-[78px] text-pink-400 text-center text-[40px]">
          Dashboard
        </h1>
        <hr className="border-t border-gray-300 w-full" />
      </div>
      <figure className="flex-1">
        <img
          src="/image/mainpage.jpg"
          alt="tea"
          className="w-full h-full object-cover"
        />
      </figure>
    </section>
  );
}
