import styled from "styled-components";

export const Container = styled.section`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: ${(props) => props.margin + "px"};
`;
