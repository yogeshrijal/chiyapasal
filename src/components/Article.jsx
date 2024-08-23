import React from "react";

export default function Article(props) {
  return (
    <section className="container mx-auto p-8 bg-[#F6EBDA]">
      <div className="mb-8">
        <header>
          <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">
            {props.heading}
          </h1>
        </header>
        <p className="text-lg text-[#1F1F1F]">{props.para}</p>
      </div>
      <ul className="flex justify-between space-x-4">
        <li className="bg-[#FFCB7C] p-4 rounded-lg shadow-md">
          <img
            src={props.firstimg}
            alt="image"
            className="rounded-t-lg w-full h-auto object-cover"
          />
          <div className="p-4">
            <header>
              <h1 className="text-xl font-semibold text-[#1F1F1F] mb-2">
                {props.firstlistheading}
              </h1>
            </header>
            <p className="text-[#1F1F1F]">{props.firstlistpara}</p>
          </div>
        </li>
        <li className="bg-[#FFCB7C] p-4 rounded-lg shadow-md">
          <img
            src={props.secondimg}
            alt="image"
            className="rounded-t-lg w-full h-auto object-cover"
          />
          <div className="p-4">
            <header>
              <h1 className="text-xl font-semibold text-[#1F1F1F] mb-2">
                {props.secondlistheading}
              </h1>
            </header>
            <p className="text-[#1F1F1F]">{props.secondlistpara}</p>
          </div>
        </li>
        <li className="bg-[#FFCB7C] p-4 rounded-lg shadow-md">
          <img
            src={props.thirdimg}
            alt="image"
            className="rounded-t-lg w-full h-auto object-cover"
          />
          <div className="p-4">
            <header>
              <h1 className="text-xl font-semibold text-[#1F1F1F] mb-2">
                {props.thirdlistheading}
              </h1>
              <p className="text-[#1F1F1F]">{props.thirdlistpara}</p>
            </header>
          </div>
        </li>
      </ul>
    </section>
  );
}
