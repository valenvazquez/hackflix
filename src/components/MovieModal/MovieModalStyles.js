import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #141414cf;
  backdrop-filter: blur(2px);
  z-index: 2000;
  padding: 2rem 1rem;
`;

export const Modal = styled.div`
  max-width: 900px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 10px 3px #0000001f;
  background-color: #141414;
  margin: auto;
  & p {
    color: #fff;
  }
  & span {
    margin-right: 0.4rem;
  }
`;

export const MovieImage = styled.div`
  background: linear-gradient(transparent 50%, #141414),
    url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 2rem 0;
  border-radius: 6px 6px 0 0;
  aspect-ratio: 1.78;
  width: 100%;
  padding: 2rem;
  color: #fff;
  position: relative;
  @media (max-width: 600px) {
    background: linear-gradient(transparent 30%, #141414),
      url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 0.5rem 2rem 1rem;
`;

export const MoviePrimaryInfo = styled.div`
  width: 65%;
  font-size: 0.9rem;
  padding-right: 0.5rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const MovieSecondaryInfo = styled.div`
  width: 35%;
  font-size: 0.8rem;
  padding-left: 0.5rem;

  & p {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 490px) {
    font-size: 1.5rem;
  }
`;

export const MovieOverview = styled.p`
  line-height: 2;
  margin: 1rem 0;
`;

export const SecondaryTitle = styled.span`
  color: #949494;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0 0;
  padding: 0.47em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #121212;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;

  & svg {
    fill: #eee;
  }
  @media (max-width: 490px) {
    font-size: 1rem;
  }
`;
