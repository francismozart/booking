import { PrimaryButtonStyled } from "../../styles/PrimaryButton.styled";

interface IPrimaryButton {
  children: string;
  onClick?: () => void;
}

const PrimaryButton = ({ children, onClick }: IPrimaryButton): JSX.Element => {
  return (
    <PrimaryButtonStyled variant="outlined" fullWidth onClick={onClick}>
      {children}
    </PrimaryButtonStyled>
  );
};

export default PrimaryButton;
