import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductForm from "../pages/ProductForms";
import ProductList from "../components/ProductList"; 
import Header from "../components/Header";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>   
        <Route path="form" element={<ProductForm />} />
        <Route path="products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
