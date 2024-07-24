import { useContext } from "react";
import ProductItem from "../ProductItem";
import { ProductContext } from "../../context/ProductContext";
import { IProduct } from "../../@types/product";
import { Input, Cards, Container, Search, Title } from "./styles";




const ProductList = () => {
  const context = useContext(ProductContext);

  if (!context) {
    console.log("erro")
  }

  const { products, setProducts } = context;

  const handleRemoveProduct = (id: number | undefined) => {
    const newProducts = products.filter(product => product.id !== id)
    setProducts(newProducts);
  }

  return (
    <Container>
      <Search>
        <Title>Todos os Produtos</Title>
        <Input type="text" placeholder="Pesquisar por nome ou descrição"/>
      </Search>
      <Cards>
        {products.map((product: IProduct) => (
          <ProductItem
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            stock={product.stock}
            description={product.description}
            onRemove={() => handleRemoveProduct(product.id)}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default ProductList;
