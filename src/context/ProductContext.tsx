import { createContext, ReactNode, useState } from "react";
import { ProductContextType } from "../@types/productContext"; 
import { IProduct } from "../@types/product";

export const ProductContext = createContext<ProductContextType>({
  products: [],
  addProduct: () => { },
  setProducts: () => { },
  getProductById: () => {},
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

  const getProductById = (id: string) => {
    return products.find((product) => product.id == id);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, setProducts, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};
