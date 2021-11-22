import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: linear-gradient(#000000ef, #0000002f 80%, #141414),
    url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const HeaderMovieTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  width: 50vh;
`;

export const HeaderMovieOverview = styled.p`
  font-size: 1.125rem;
  width: 50vh;
  line-height: 2rem;
`;

export const HeaderMovieBadge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ccc9c9;
  letter-spacing: 0.3rem;
  font-size: 0.75rem;
  font-weight: 800;
  & img {
    width: 1rem;
    object-fit: contain;
    margin-right: 0.5rem;
  }
`;
