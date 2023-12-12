import { PriceStyled } from "../../styles/Price.styled";

interface IPrice {
  price: number;
  numberOfDays: number;
}

const Price = ({ price, numberOfDays }: IPrice): JSX.Element => {
  const totalPrice = price * numberOfDays;
  return (
    <PriceStyled variant="body1">
      <strong>
        <small>$</small>
        {price}
      </strong>{" "}
      <small>night</small> <strong> · </strong>
      <strong>
        <small>$</small>
        {totalPrice}
      </strong>
      <small> total</small>
    </PriceStyled>
  );
};

export default Price;
