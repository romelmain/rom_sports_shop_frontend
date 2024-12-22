import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToCart } from "../components/products";
import full_cart2 from "../assets/full-react-cart2.png";
import "./ProductsDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const imgElement = document.querySelector("#imgCart");

  const fetchProductDetail = async (id) => {
    console.log(id);
    const response = await fetch(`http://localhost:8000/products/${id}`);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

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

  useEffect(() => {
    fetchProductDetail(id);
  }, []);

  return (
    <>
      <Menu></Menu>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Container>
          <Row className="row-cols-3">
            <Col>
              <Card
                bg="secondary"
                key="secondary"
                text="white"
                style={{ width: "24rem" }}
                className="mb-2"
              >
                <Card.Img variant="top" src={product.image} />
              </Card>
            </Col>
            <Col>
              <Card
                bg="secondary"
                key="secondary"
                text="white"
                style={{ width: "24rem", height: "24rem" }}
                className="mb-2"
              >
                <Card.Header>
                  {product.name}: $ {product.price}
                </Card.Header>

                <Card.Body>
                  <Card.Title>Description:</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Button
                  variant="primary"
                  value={product.id_product_price}
                  onClick={requestAddToCart}
                >
                  Add to Cart
                </Button>
              </Card>
            </Col>
            <Col>
              <Card
                bg="secondary"
                key="secondary"
                text="white"
                style={{ width: "24rem" }}
                className="mb-2"
              >
                <Card.Img
                  className="rota-horizontal"
                  variant="top"
                  src={product.image}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductDetail;
