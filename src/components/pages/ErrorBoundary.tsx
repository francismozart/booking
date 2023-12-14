import { useRouteError } from "react-router-dom";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Link from "@mui/material/Link";
import GlobalStyle from "../../styles/GlobalStyle.styled";
import {
  ErrorContainer,
  ErrorWrapper,
} from "../../styles/ErrorBoundary.styled";
import Title from "../atoms/Title";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorContainer>
      <GlobalStyle />
      <ErrorWrapper>
        <ErrorOutline fontSize="large" />
        <Title>An error occurred.</Title>
        <a href="/explore"></a>
        <Link href="/explore" underline="none">
          Should we start over?
        </Link>
      </ErrorWrapper>
    </ErrorContainer>
  );
};

export default ErrorBoundary;
