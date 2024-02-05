import React from "react";
import List from "../components/List";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import RelatedTitle from "../components/RelatedTitle";
import RelatedProducts from "../components/RelatedProducts";
import Products from "../components/Products";
import Partners from "../components/Partners";
import ProductCards from "../components/ProductCards";
import Brands from "../components/Brands";

import "./style.scss";

function App() {
  return (
    <div className="AppStyle">
      <List />
      <Header />
      <Navigation />
      <Banner />
      <Categories />
      <RelatedTitle />
      <RelatedProducts />
      <Products />
      <Partners />
      <ProductCards />
      <Brands />
    </div>
  );
}

export default App;
