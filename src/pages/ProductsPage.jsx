import React, { useContext, useEffect } from "react";

import Menu from "../components/Menu";
import { ListProductsContext } from "../contexts/listProducts.context";

import "./ProductPage.css";
import HeaderComponent from "../components/HeaderComponent";

import ProductsComponent from "../components/ProductsComponent";

function ProductsPage() {
  const { products, getProducts, error } = useContext(ListProductsContext);

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  return (
    <>
      <Menu></Menu>
      <center>
        <HeaderComponent header="Products"></HeaderComponent>
      </center>
      <div id="divpage" className="divpage">
        <ProductsComponent products={products}></ProductsComponent>
      </div>
    </>
  );
}

export default ProductsPage;
