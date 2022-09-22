import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import VideoComponent from "../components/VideoComponent";


const Home = () => {
  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
