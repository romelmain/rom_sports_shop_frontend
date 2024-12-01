import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../components/Menu";
import { ListProductsContext } from "../contexts/listProducts.context";

function ProductsPage() {
  const { products, getProducts, error } = useContext(ListProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Menu></Menu>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage;
