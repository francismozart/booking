import { styled } from "styled-components";

export const FeaturedImageContainer = styled.div`
  border-radius: var(--main-border-radius);
  overflow: clip;
  margin: 1rem 0;
  max-height: 280px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 600px) {
    max-height: unset;
  }
`;
