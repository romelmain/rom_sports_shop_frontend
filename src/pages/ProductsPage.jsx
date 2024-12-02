import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Menu from "../components/Menu";
import { ListProductsContext } from "../contexts/listProducts.context";
import RowProduct from "../components/RowProduct";
import "./ProductPage.css";

function ProductsPage() {
  const { products, getProducts, error } = useContext(ListProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const listProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <br />
        <hr />
        <Row sm={4}>
          <RowProduct product={product}></RowProduct>
        </Row>
      </div>
    );
  });

  return (
    <>
      <Menu></Menu>
      <div id="divpage" className="divpage">
        <Container>{listProducts}</Container>
      </div>
    </>
  );
}

export default ProductsPage;
