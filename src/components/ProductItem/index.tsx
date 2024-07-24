import { IProduct } from "../../@types/product";
import Delete from "../../assets/delete";
import Edit from "../../assets/edit";
import {
  Buttons,
  Card,
  Description,
  Price,
  Stock,
  SubTitle,
  Title,
} from "./styles";


const ProductItem = ({
  name,
  category,
  price,
  stock,
  description,
  onRemove,
}: IProduct) => {
  return (
    <Card>
      <Stock>
        <p>{stock} em estoque</p>
      </Stock>
      <Title>{name}</Title>
      <SubTitle>{category}</SubTitle>
      <Description>{description}</Description>
      <Price>R$ {price},00</Price>
      <Buttons>
        <button>{Edit()}</button>
        <button onClick={onRemove}>{Delete()}</button>
      </Buttons>
    </Card>
  );
};

export default ProductItem;
