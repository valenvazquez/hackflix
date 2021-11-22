import {
  NavContainer,
  Nav,
  NavBrandImg,
  NavItems,
  StyledLink,
  SearchInput,
  SearchButton,
  NavBrandLink,
  MenuButton,
  BurgerIcon,
} from "./NavbarStyles";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [darkNav, setDarkNav] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/search") setSearchInput("");
  }, [location.pathname]);

  function changeBackground() {
    if (window.scrollY >= 20) {
      setDarkNav(true);
    } else {
      setDarkNav(false);
    }
  }

  return (
    <Nav className={darkNav ? "active" : null}>
      <NavContainer>
        <NavBrandLink href="/browse">
          <NavBrandImg src="/images/hackflix-logo.png" />
        </NavBrandLink>
        <NavItems className={openMenu ? "expanded" : ""}>
          <StyledLink onClick={() => setOpenMenu(false)} to="/browse">
            Home
          </StyledLink>
          <StyledLink onClick={() => setOpenMenu(false)} to="/movies">
            Movies
          </StyledLink>{" "}
        </NavItems>
        {displaySearch && (
          <SearchInput
            id="searchInput"
            type="text"
            onInput={(e) => {
              history.push({
                pathname: "/search",
                search: "q=" + e.target.value,
              });
              setSearchInput(e.target.value);
            }}
            value={searchInput}
            placeholder="Titles"
          />
        )}
        <SearchButton
          className={displaySearch ? "show" : ""}
          onClick={() => setDisplaySearch(!displaySearch)}
        >
          <FaSearch />
        </SearchButton>
        <MenuButton
          onClick={() => {
            setOpenMenu(!openMenu);
            setDisplaySearch(false);
          }}
        >
          <BurgerIcon className={openMenu ? "open" : ""} />
        </MenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
