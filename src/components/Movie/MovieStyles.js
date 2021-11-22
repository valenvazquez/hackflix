import styled from "styled-components";

export const MovieImage = styled.img`
  max-width: 250px;
  min-width: 190px;
  /* min-width: 180px; */
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1.5;
  border-radius: 0.5em;
  cursor: pointer;
  flex: 1 1 1%;
  color: #ccc9c9;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const MoviePreview = styled.div`
  position: absolute;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};
  width: ${(props) => props.width + "px"};
  aspect-ratio: 1/1.5;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0.5em;
  cursor: pointer;
  box-shadow: 0 5px 10px 5px #0000001f;
  transform-origin: center
    ${(props) => (Number(props.left) > 24 ? "center" : "left")};
  animation: 0.2s forwards linear scale;
  isolation: isolate;

  &.no-image {
    background-color: #191919;
  }

  &.no-image::after {
    content: attr(alt);
  }
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

export const PreviewDetails = styled.div`
  color: #fff;
  position: absolute;
  padding: 0.5rem;
  background-color: #141414df;
  width: 100%;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(5px);
  opacity: 0;
  border-radius: 0 0 0.5em 0.5em;
  animation: fadeIn forwards 0s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const PreviewInfoContainer = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${(props) => props.marginTop + "rem"};
`;

export const MovieRating = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.4rem;
  &.excellent {
    color: #19d46a;
  }
  &.good {
    color: #93de78;
  }
  &.regular {
    color: #cfcf3a;
  }
  &.bad {
    color: #c73030;
  }
`;

export const MovieInfo = styled.span`
  font-size: 0.7rem;
  font-weight: 300;
  margin-right: 0.4rem;

  &.genre {
    color: #ccc9c9;
    letter-spacing: 0.05rem;
    font-size: 0.55rem;
    text-transform: uppercase;
    line-height: 2;
    margin: 0;
  }
`;

export const BadgeHD = styled.span`
  font-size: 0.5rem;
  font-weight: 600;
  padding: 0.2em;
  border-radius: 0.2em;
  border: 1px solid #ccc9c9;
  color: #ccc9c9;
  margin-right: 0.4rem;
`;

export const Dot = styled.span`
  width: 3px;
  opacity: 0.9;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #ccc9c9;
  margin: 0 0.5rem;
`;
