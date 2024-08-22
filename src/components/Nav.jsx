import React from "react";
export default function Nav(prompt) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-800  flex justify-between items-center text-lg text-white font-semibold h-20 px-5">
      <div className="h-35 w-24">
        <img src="/image/logo.png.png" alt="logo" />
      </div>

      <ul className="flex gap-8 items-center">
        <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
          Services
        </li>
        <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
          About
        </li>
      </ul>
    </div>
  );
}
