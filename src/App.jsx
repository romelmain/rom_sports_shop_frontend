import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ErrorPage from "./pages/ErrorPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/products" element={<ProductsPage></ProductsPage>}></Route>
      <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>

      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
}

export default App;
