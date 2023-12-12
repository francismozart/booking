import { useRouteError } from "react-router-dom";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
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
        <Title>An unexpected (or is it?) error occurred.</Title>
      </ErrorWrapper>
    </ErrorContainer>
  );
};

export default ErrorBoundary;
