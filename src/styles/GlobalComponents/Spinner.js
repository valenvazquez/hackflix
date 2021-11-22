import styled from "styled-components";

export const Spinner = styled.div`
  width: ${({ size }) =>
    size === "sm"
      ? "1rem"
      : size === "md"
      ? "2rem"
      : size === "lg"
      ? "3rem"
      : size === "xl"
      ? "4rem"
      : "0.5rem"};
  aspect-ratio: 1/1;
  border: 4px solid #e6020c;
  border-top-color: transparent;
  position: relative;
  background-clip: padding-box;
  border-radius: 50%;
  margin: 1rem auto;
  animation: spin 1.5s linear infinite;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: -4px;
    background: linear-gradient(to left, #e6020c, #e6020c 20%, transparent 80%);
    border-radius: inherit;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #141414;
    border-radius: inherit;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
