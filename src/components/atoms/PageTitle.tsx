import { PageTitleStyled } from "../../styles/PageTitleStyled.styled";

interface IPageTitle {
  children: string;
}

const PageTitle = ({ children }: IPageTitle): JSX.Element => {
  return <PageTitleStyled>{children}</PageTitleStyled>;
};

export default PageTitle;
