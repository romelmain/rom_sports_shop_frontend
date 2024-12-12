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
          <Col>
            <img width="35" height="35" src={product.product.image}></img>
          </Col>
          <Col>{product.product.name}</Col>
          <Col>{product.price}$</Col>
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
        <Container>{products}</Container>
      </center>
    </>
  );
}

export default CartDetail;
