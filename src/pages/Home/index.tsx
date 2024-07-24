import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <Header/>
      <Container>
        <ProductList />
      </Container>
    </>
  );
};

export default Home;
