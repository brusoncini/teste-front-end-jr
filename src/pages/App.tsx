import React from "react";
import List from "../components/List";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import RelatedProducts from '../components/RelatedProducts'
import Products from '../components/Products'

import "./style.scss";

function App() {
  return (
    <div className="AppStyle">
      <List />
      <Header />
      <Navigation />
      <Banner />
      <Categories/>
      <RelatedProducts/>
      <Products/>
    </div>
  );
}

export default App;
