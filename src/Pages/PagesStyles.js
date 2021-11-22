import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoviesContainer = styled.div`
  display: flex;
  column-gap: 5px;
  row-gap: 50px;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NotFoundText = styled.p`
  color: #eee;
  margin-bottom: ${(props) => props.margin + "rem"};
  font-size: 0.8rem;
  font-weight: 500;
`;

export const SuggestionItem = styled.li`
  list-style: disc;
  color: #eee;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 3rem;
`;

export const PageTitle = styled.h1`
  font-size: 2.3rem;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  /* position: sticky; */
  /* z-index: 2000; */
  color: #fff;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto 1rem;
  padding: 5rem 1.5rem 0;
  flex-wrap: wrap;

  &.secondary .movies-link {
    color: #909090;
    font-size: 1rem;
    font-weight: 400;
    vertical-align: middle;
  }

  &.secondary .movies-link::after {
    content: ">";
    margin: 0 1rem;
    font-size: 1.4rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;
