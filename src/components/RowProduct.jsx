import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function RowProduct(props) {
  const { product } = props;
  return (
    <>
      <Col sm={4}>
        <img width="260px" height="260px" src={product.image}></img>
      </Col>
      <Col sm={4}>{product.name}</Col>
      <Col sm={2}>6$</Col>
      <Col sm={2}>
        <Button variant="primary">Add to Cart</Button>
      </Col>
    </>
  );
}

export default RowProduct;
