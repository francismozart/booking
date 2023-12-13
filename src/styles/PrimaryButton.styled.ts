import { styled } from "styled-components";

export const PrimaryButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--main-border-radius);
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--main-font);
  line-height: 1.75;
  text-transform: none;
  color: var(--primary-color);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: 0px;
  text-decoration: none;
  letter-spacing: 0.02rem;
  border: 1px solid rgba(25, 118, 210, 0.5);\
  width: 100%;

  transition: background-color 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    background-color: var(--primary-color);
  }
`;
