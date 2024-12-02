import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

function RowProduct(props) {
  const { product } = props;
  return (
    <>
      <Col sm={4}>
        <img width="260px" height="260px" src={product.image}></img>
      </Col>

      <Col sm={6}>
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>
            {product.name}: {product.price} $
          </Card.Header>
          <Card.Body>
            <Card.Title>Description:</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={2}>
        <Button variant="primary">Add to Cart</Button>
      </Col>
    </>
  );
}

export default RowProduct;
