import { createContext, ReactNode, useState } from "react";
import { ProductContextType } from "../@types/productContext"; 
import { IProduct } from "../@types/product";

export const ProductContext = createContext<ProductContextType>({
  products: [],
  addProduct: () => {},
  setProducts: () => {}
});

type ChildrenType = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ChildrenType) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
