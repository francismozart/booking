import { TitleStyled } from "../../styles/Title.styled";

interface ITitle {
  children: string;
}

const Title = ({ children }: ITitle): JSX.Element => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;
