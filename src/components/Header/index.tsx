import { Link, Outlet } from "react-router-dom";
import { Container, ContainerButtons, Title } from "./styles";

const Header = () => {
  return (
    <>
      <Container>
        <Title>Controle de estoque</Title>
        <ContainerButtons>
          <Link to="/form" className="link">Criar produto</Link>
          <Link to="/form" className="link">Pesquisas avançadas</Link>
        </ContainerButtons>
      </Container>
      <Outlet />
    </>
  );
};

export default Header;
