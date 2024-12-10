import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

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

  return (
    <>
      <Menu></Menu>
      <div>CartDetail</div>
    </>
  );
}

export default CartDetail;
