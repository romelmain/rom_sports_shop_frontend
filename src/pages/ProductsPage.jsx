import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Menu from "../components/Menu";
import { ListProductsContext } from "../contexts/listProducts.context";
import RowProduct from "../components/RowProduct";

function ProductsPage() {
  const { products, getProducts, error } = useContext(ListProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const listProducts = products.map((product) => {
    return (
      <Row sm={4} key={product.id}>
        <RowProduct product={product}></RowProduct>
      </Row>
    );
  });

  return (
    <>
      <Menu></Menu>
      <Container>{listProducts}</Container>
    </>
  );
}

export default ProductsPage;
