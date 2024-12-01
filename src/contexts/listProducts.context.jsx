import { createContext, useState } from "react";

const ListProductsContext = createContext();

function ListProductsProviderWrapper(props) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <ListProductsContext.Provider value={{ products, getProducts, error }}>
      {props.children}
    </ListProductsContext.Provider>
  );
}
export { ListProductsContext, ListProductsProviderWrapper };
