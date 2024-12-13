import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderComponent from "../components/HeaderComponent";

function CartDetail() {
  const { id } = useParams();
  const [cart, setCart] = useState({});

  const getCartDetail = async (id_cart) => {
    const response = await fetch(`http://localhost:8000/cart/${id}`);
    const data = await response.json();
    console.log(data);
    setCart(data);
  };

  useEffect(() => {
    getCartDetail(id);
  }, []);

  const products = cart.list_product_price?.map((product) => {
    return (
      <div className="textoBlanco" key={product.product.id}>
        <Row>
          <Col className="w-25 p-1" style={{ textAlign: "right" }}>
            <img width="35" height="35" src={product.product.image}></img>
          </Col>
          <Col>{product.product.name}</Col>
          <Col style={{ textAlign: "center" }}>
            <label>{product.price}</label>$
          </Col>
          <Col style={{ textAlign: "center" }}>{product.quantity}</Col>
          <Col style={{ textAlign: "center" }}>
            {product.quantity * product.price}$
          </Col>
        </Row>
      </div>
    );
  });

  const header = "CartDetail: " + cart.date;

  return (
    <>
      <Menu></Menu>
      <center>
        <HeaderComponent header={header}></HeaderComponent>
        <br></br>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <label className="textoBlancoEncabezado">
                <strong>Product</strong>
              </label>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <label className="textoBlancoEncabezado">
                <strong>Item Price</strong>
              </label>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <label className="textoBlancoEncabezado">
                <strong>Quantity</strong>
              </label>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <label className="textoBlancoEncabezado">
                <strong>Price to Pay</strong>
              </label>
            </Col>
          </Row>
        </Container>
        <Container>{products}</Container>
      </center>
    </>
  );
}

export default CartDetail;
