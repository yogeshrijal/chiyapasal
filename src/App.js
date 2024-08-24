import React from "react";
import Nav from "./components/Nav";
import Mainpage from "./components/Mainpage";
import Table from "./components/Table";
import Dashboard from "./components/Dashboard";
import Article from "./components/Article";
import Cabin from "./components/Cabin";

function App() {
  return (
    <div className="flex   ">
      <Mainpage />
      <div>
        <Nav nav="Cabins" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
          <Cabin heading="Cabin 1" />
          <Cabin heading="Cabin 2" />
          <Cabin heading="Cabin 3" />
          <Cabin heading="Cabin 4" />
          <Cabin heading="Cabin 5" />
          <Cabin heading="Cabin 6" />
        </div>
      </div>
    </div>
  );
}

export default App;
