import { IProduct } from "./product";

export type ProductContextType = {
    products: IProduct[];
    addProduct: (product: IProduct) => void;
    setProducts: Dispatch<SetStateAction<IProduct[]>>;
    getProductById: (id: string) => IProduct;
}