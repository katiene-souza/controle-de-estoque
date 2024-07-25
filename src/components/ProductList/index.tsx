import { useContext, useState } from "react";
import ProductItem from "../ProductItem";
import { ProductContext } from "../../context/ProductContext";
import { IProduct } from "../../@types/product";
import { Input, Cards, Container, Search, Title } from "./styles";

const ProductList = () => {
  const context = useContext(ProductContext);

  if (!context) {
    console.log("Contexto não encontrado");
  }

  const { products, setProducts } = context;
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemoveProduct = (id: number | string | undefined) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja remover esse produto?"
    );
    if (confirmDelete === true) {
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    }
  };

  const filteredProducts = products.filter(
    (product: IProduct) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Search>
        <Title>Todos os Produtos</Title>
        <Input
          type="text"
          placeholder="Pesquisar por nome ou descrição"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>
      <Cards>
      {filteredProducts.map((product: IProduct) => (
          <ProductItem
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            stock={product.stock}
            description={product.description}
            onRemove={() => handleRemoveProduct(product.id)}
            onEdit={`/form/${product.id}`}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default ProductList;
