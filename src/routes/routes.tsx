import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductForms from "../pages/ProductForms";
import ProductList from "../components/ProductList"; 
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>   
        <Route path="form" element={<ProductForms />} />
        <Route path="form/:id" element={<ProductForms/>} />
        <Route path="products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
