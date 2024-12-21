import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { addToCart } from "./products";

import full_cart2 from "../assets/full-react-cart2.png";
import { useNavigate } from "react-router-dom";

function ColProduct(props) {
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
      <Card
        bg="secondary"
        key="Secondary"
        text="white"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Img
          id={product.id}
          onClick={handleClick}
          variant="top"
          src={product.image}
        />
        <Card.Body className="text-center">
          <Card.Title>
            {product.name}: $ {product.price}
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button
            onClick={requestAddToCart}
            value={product.id_product_price}
            variant="primary"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ColProduct;
