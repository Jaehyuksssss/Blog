import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: #666;
    font-size: 1rem;

    &:hover {
      color: #333;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">My Blog</Logo>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
