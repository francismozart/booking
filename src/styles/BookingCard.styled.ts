import { styled } from "styled-components";

export const CardContainer = styled.div`
  margin: 0 0 1rem;

  & * {
    text-decoration: none;
  }

  .MuiPaper-root {
    border-radius: var(--main-border-radius);
  }
`;

export const SmallDate = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: var(--main-font);
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 100;
`;
