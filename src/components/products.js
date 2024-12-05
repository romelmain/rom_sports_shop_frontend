import axios from "axios";

export function addToCart(id_product_price) {
  console.log(id_product_price);
  let apiResponse = {
    response: false,
    message: "",
    code: 0,
  };

  const date = new Date();
  const anio = date.getFullYear();
  const mes = ("0" + (date.getMonth() + 1)).slice(-2);
  const dia = ("0" + date.getDay()).slice(-2);
  const hora = ("0" + date.getHours()).slice(-2);
  const min = ("0" + date.getMinutes()).slice(-2);
  const seg = ("0" + date.getSeconds()).slice(-2);

  const fecha =
    anio + "-" + mes + "-" + dia + " " + hora + ":" + min + ":" + seg;

  const productCart = {
    date: fecha,
    status_id: 1,
    user_id: localStorage.getItem("id"),
    product_price_id: id_product_price,
  };
  console.log(productCart);

  const addToCartRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/cart",
        productCart
      );
      const data = await response.data;
      console.log(response);
      console.log(response.data);
      console.log(response.status);

      switch (response.status) {
        case 201:
          apiResponse = {
            response: response.data,
            message: "",
            code: response.status,
          };
          if (
            localStorage.getItem("id_cart") == null ||
            localStorage.getItem("id_cart") == ""
          ) {
            localStorage.setItem("id_cart", response.data.id_cart);
            console.log("lo guarda");
          }

          break;
        case 400:
        case 401:
        case 403:
          apiResponse = {
            response: response.data,
            message: response.statusText,
            code: response.status,
          };
      }
    } catch (e) {
      apiResponse = {
        response: false,
        message: e.message,
        code: 99,
      };
    }
    return apiResponse;
  };

  return addToCartRequest();
}
