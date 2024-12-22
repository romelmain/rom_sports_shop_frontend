import React from "react";
import Container from "react-bootstrap/Container";

import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

function ProductsComponent(props) {
  const products = props.products;

  let navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.target);
    let tagName = e.target.tagName;
    console.log(tagName);
    if (tagName == "IMG") {
      console.log("Imagen" + e.target.id);
      const id = e.target.id;
      navigate(`/products/${id}`);
    } else {
      console.log(tagName);
    }
  };

  function createGridProducts() {
    let rowCard = "<div class='row row-cols-4'>";
    let count = 0;
    let nn = 3;
    let row = "";

    const listProducts = products.map((product) => {
      if (count == 0) {
        row = row + rowCard;
      }

      let img =
        "<img  id=" +
        product.id +
        " width='260px' height='260px' src=" +
        product.image +
        "></img>";

      let col =
        "<div class='col'>" +
        "<div class='card h-100'>" +
        img +
        "<div class='card-body'>" +
        "<h5 class='card-title'>Product Name:" +
        "</h5>" +
        "<p class='card-text'>" +
        product.name +
        "</p>" +
        "</div>" +
        "<div class='card-footer'>" +
        "<small class='text-muted'><strong>Price:</strong> $ " +
        product.price +
        "</small>" +
        "</div>" +
        "</div>" +
        "</div>";

      row = row + col;
      if (count < nn) {
        count = count + 1;
      } else if (count == nn) {
        count = 0;
        row = row + "</div>";
      }
    });
    return row;
  }

  const parseGridProducts = parse(createGridProducts());

  return (
    <>
      <Container onClick={handleClick}> {parseGridProducts} </Container>
    </>
  );
}

export default ProductsComponent;
