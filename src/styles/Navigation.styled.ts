import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

export const NavigationStyled = styled(Paper)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transition: bottom 0.3s ease;

  &.hidden {
    bottom: -60px;
  }

  @media (min-width: 600px) {
    bottom: unset;
    position: relative;
    padding-bottom: 1rem;
    box-shadow: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
