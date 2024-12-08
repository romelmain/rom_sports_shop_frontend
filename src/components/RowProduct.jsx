import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { addToCart } from "../components/products";

import full_cart2 from "../assets/full-react-cart2.png";
import { useNavigate } from "react-router-dom";

function RowProduct(props) {
  const { product } = props;
  const imgElement = document.querySelector("#imgCart");
  let navigate = useNavigate();

  const requestAddToCart = (e) => {
    addToCart(e.target.value).then((apiResponse) => {
      if (apiResponse.code == 201) {
        console.log("OKKK");
        imgElement.removeAttribute("src");
        imgElement.setAttribute("src", full_cart2);

        return;
      } else {
        console.log("NO OKKK");
        console.log(apiResponse.message);
      }
    });
  };

  const handleClick = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    navigate(`/products/${id}`);
  };

  return (
    <>
      <Col sm={4}>
        <img
          id={product.id}
          onClick={handleClick}
          width="260px"
          height="260px"
          src={product.image}
        ></img>
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
        <Button
          onClick={requestAddToCart}
          value={product.id_product_price}
          variant="primary"
        >
          Add to Cart
        </Button>
      </Col>
    </>
  );
}

export default RowProduct;
