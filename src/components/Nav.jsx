import React from "react";
export default function Nav(prompt) {
  return (
    <div>
      <h2 className="mb-[78px] text-pink-400 text-center text-[40px]">
        {prompt.nav}
      </h2>
      <div className="border-t border-gray-300 w-full"></div>
    </div>
  );
}
