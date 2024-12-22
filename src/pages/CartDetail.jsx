import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderComponent from "../components/HeaderComponent";
import Table from "react-bootstrap/Table";

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

  let totalPay = 0;
  const products = cart.list_product_price?.map((product) => {
    totalPay += product.price * product.quantity;
    return (
      <tr key={product.product.id}>
        <td align="center">
          <img width="100px" height="100px" src={product.product.image}></img>
        </td>
        <td>{product.product.name}</td>
        <td>$ {product.price}</td>
        <td>{product.quantity}</td>
        <td>$ {product.price * product.quantity}</td>
      </tr>
    );
  });

  const total = (
    <tr>
      <td colSpan="4" align="right">
        <strong>Total:</strong>
      </td>
      <td className="totalPay">$ {totalPay}</td>
    </tr>
  );

  const header = "CartDetail total: $ " + totalPay;

  return (
    <>
      <Menu></Menu>
      <center>
        <HeaderComponent header={header}></HeaderComponent>
        <br></br>
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr align="center">
                <th></th>
                <th>Product</th>
                <th>Item Price</th>
                <th>Quantity</th>
                <th>Price to Pay</th>
              </tr>
            </thead>
            <tbody>
              {products}
              {total}
            </tbody>
          </Table>
        </Container>
      </center>
    </>
  );
}

export default CartDetail;
