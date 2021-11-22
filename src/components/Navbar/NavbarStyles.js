import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const breakpoint = 768;

const expand = keyframes`
  0%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  padding: 1rem 0;
  left: 0;
  right: 0;
  z-index: 1000;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(#000, #141414);
    z-index: -1;
    animation: fadeOut 0.5s forwards linear;
  }
  &.active::before {
    animation: fadeIn 0.5s forwards linear;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const NavItems = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: ${breakpoint}px) {
    display: none;
    &.expanded {
      display: flex;
    }
  }

  &.expanded {
    flex-direction: column;
    background-color: #141414;
    position: fixed;
    inset: 0;
    padding-top: 4rem;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  &:hover {
    color: #fff;
    opacity: 0.8;
  }

  &.active {
    /* color: red; */
  }

  @media (max-width: ${breakpoint}px) {
    padding: 1rem;
    text-align: center;
    display: block;
  } ;
`;

export const NavBrandLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const NavBrandImg = styled.img`
  width: 6rem;
  margin-right: 2rem;
  @media (max-width: ${breakpoint}px) {
    width: 5rem;
    margin-right: 0.5rem;
  }
`;

export const NavContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const SearchInput = styled.input`
  border: 1px solid #e7e7e7;
  border-radius: 2rem;
  height: 2rem;
  background-color: #00000055;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 0.8rem;
  margin-left: auto;
  transform-origin: right;
  animation: ${expand} 0.2s linear;

  &:focus {
    outline: none;
    border-color: #e50914;
  }
  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  @media (max-width: ${breakpoint}px) {
    width: 100%;
    max-width: 150px;
    margin-right: 0;
    font-size: 0.7rem;
  }

  @media (max-width: 378px) {
    max-width: 100px;
  }
`;

export const SearchButton = styled.button`
  color: #fff;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.1rem;
  @media (max-width: ${breakpoint}px) {
    margin-right: 1rem;
    margin-left: auto;
    font-size: 0.9rem;

    &.show {
      margin-left: 0;
    }
  }

  @media (max-width: 378px) {
    margin-right: 0;
  }
`;

export const MenuButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  display: none;
  justify-self: end;
  z-index: 1000;

  @media (max-width: ${breakpoint}px) {
    display: block;
  }
`;

export const BurgerIcon = styled.i`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #fff;
  position: relative;
  transition: all 0.4s ease-in-out;

  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transition: all 0.4s ease-in-out;
  }
  &::after {
    top: calc(100% + 6px);
  }
  &::before {
    bottom: calc(100% + 6px);
  }

  &.open {
    transform: translateX(-100%);
    background-color: transparent;
  }
  &.open::after {
    transform: translateX(100%) translateY(-8px) rotate(-45deg);
  }
  &.open::before {
    transform: translateX(100%) translateY(8px) rotate(45deg);
  }
`;
