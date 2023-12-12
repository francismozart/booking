import styled from "styled-components";

export const AlertContainer = styled.div`
  width: 100%;

  .MuiPaper-root {
    border-radius: var(--main-border-radius);
  }

  @media (min-width: 600px) {
    .MuiPaper-root {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;
