import { useContext } from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { ThemeContext } from "../../context/ThemeContext";
import { Container, Button } from "./styles";

const Home = () => {
  const context = useContext(ThemeContext);

  const { isDarkMode, toggleTheme } = context;

  return (
    <>
      <Header />
      <Button onClick={toggleTheme}>
        {isDarkMode ? "Modo Claro" : "Modo Escuro"}
      </Button>
      <Container>
        <ProductList />
      </Container>
    </>
  );
};

export default Home;
