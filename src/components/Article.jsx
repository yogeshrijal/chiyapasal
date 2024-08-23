import React from "react";

export default function Article(props) {
  return (
    <section class="container">
      <div>
        <header>
          <h1>{props.heading}</h1>
        </header>
        <p>{props.para}</p>
      </div>
      <ul>
        <li>
          <img src={props.firstimg} alt="image" />
          <div>
            <header>
              <h1>{props.firstlistheading}</h1>
            </header>
            <p>{props.firstlistpara}</p>
          </div>
        </li>
        <li>
          <img src={props.secondimg} alt="image" />
          <div>
            <header>
              <h1>{props.secondlistheading}</h1>
            </header>
            <p>{props.secondlistpara}</p>
          </div>
        </li>
        <li>
          <img src={props.thirdimg} alt="image" />
          <div>
            <header>
              <h1>{props.thirdlistheading}</h1>
              <p>{props.thirdlistpara}</p>
            </header>
          </div>
        </li>
      </ul>
    </section>
  );
}
