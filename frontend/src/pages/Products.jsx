import React from "react";
import Layout from "./Layout";
import ProductList from "../components/Productlist.jsx";

const Products = () => {
  return (
    <div>
      <Layout>
        <ProductList />
      </Layout>
    </div>
  );
};

export default Products;
