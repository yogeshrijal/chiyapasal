import React from "react";
import Nav from "./components/Nav";
import Mainpage from "./components/Mainpage";
import Table from "./components/Table";
import Dashboard from "./components/Dashboard";
import Article from "./components/Article";

function App() {
  return (
    <div className="flex   ">
      <Mainpage />
      <Dashboard />
      <Article />
    </div>
  );
}

export default App;
