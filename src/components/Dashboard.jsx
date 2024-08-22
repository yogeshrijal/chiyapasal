import React from "react";

export default function Dashboard(prompt) {
  return (
    <section className="h-screen">
      <div>
        <h1 className="mb-[78px] text-pink-400 text-center text-[40px]">
          Dashboard
        </h1>
        <hr className="border-t border-gray-300 w-full" />
      </div>
      <figure>
        <img src="/image/mainpage.jpg" alt="tea" className="w-full" />
        <h2 className="text-2xl font-bold text-center mt-4">Add some items</h2>
      </figure>
    </section>
  );
}
