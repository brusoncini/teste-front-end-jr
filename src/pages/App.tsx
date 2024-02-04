import React from "react";
import List from "../components/List";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

import "./style.scss";

function App() {
  return (
    <div className="AppStyle">
      <List />
      <Header />
      <Navigation />
      <Banner />
      <Categories/>
    </div>
  );
}

export default App;
