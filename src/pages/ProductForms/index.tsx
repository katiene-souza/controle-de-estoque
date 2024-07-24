import { FormEvent, useContext, useState } from "react";
import { Button, Container, Form, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../@types/product";
import { ProductContext } from "../../context/ProductContext";


const ProductForms = () => {
  const context = useContext(ProductContext);
  const navigate = useNavigate();

  if(!context) {
    alert("ahhhh")
  }

  const { addProduct } = context;

  const [productData, setProductData] = useState<IProduct>({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addProduct(productData);
    setProductData({
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
    });
    navigate('/');
  };

  return (
    <>
      <Container>
        <Title>Crie um produto:</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
              placeholder="Nome do produto"
              maxLength={25}
              required
            />
          </div>
          <div>
            <label>
              Categoria:
              <select
                name="categoria"
                value={productData.category}
                onChange={(e) =>
                  setProductData({ ...productData, category: e.target.value })
                }
                required
              >
                <option value="smartphones">Smartphones</option>
                <option value="tablets">Tablets</option>
                <option value="laptops">Laptops</option>
                <option value="Acessorios">Acessórios</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="preco">Preço:</label>
            <input
              type="number"
              name="preco"
              id="preco"
              value={productData.price}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
              placeholder="Valor do produto"
              maxLength={25}
              required
            />
          </div>
          <div>
            <label htmlFor="estoque">Estoque:</label>
            <input
              type="number"
              name="estoque"
              id="estoque"
              value={productData.stock}
              onChange={(e) =>
                setProductData({ ...productData, stock: e.target.value })
              }
              placeholder="Quantidade"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Descrição:</label>
            <textarea
              name="descricao"
              id="descricao"
              rows={4}
              cols={40}
              maxLength={353}
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
              placeholder="Limite de 60 palavras"
              required
            />
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ProductForms;
