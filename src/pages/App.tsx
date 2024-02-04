import React from "react";
import List from "../components/List";
import Header from "../components/Header";
import "./style.scss";
import Categories from "../components/Categories";
import Banner from "../components/Banner";

function App() {
  return (
    <div className="AppStyle">
      <List />
      <Header />
      <Categories />
      <Banner />
    </div>
  );
}

export default App;
