import styled from "styled-components";
import { Link } from "react-router-dom";

export const SelectButton = styled.button`
  border: 1px #fff solid;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  margin-left: 3rem;
  padding: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #ffffff20;
  }

  & svg {
    margin-left: 2rem;
  }
`;

export const SelectOptionsContainer = styled.div`
  padding: 0.5rem;
  max-width: 500px;
  width: 350%;
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  border: 0.5px solid #161616;
  box-shadow: 0 0 10px 0 #00000023;
  background-color: #000000e0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: default;
`;

export const SelectItem = styled(Link)`
  line-height: 2;
  font-size: 0.9rem;
  color: white;
  width: 33%;
  font-weight: 300;
  text-align: start;

  &:hover {
    text-decoration: underline;
  }
`;
