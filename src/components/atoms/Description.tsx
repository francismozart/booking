import { DescriptionStyled } from "../../styles/Description.styled";

export interface IDescription {
  children: string;
  excerpt?: boolean;
}

const Description = ({ children }: IDescription): JSX.Element => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};

export default Description;
