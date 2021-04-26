import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.span`
  font-size: 32px;
  font-weight: bold;
`

const Nav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li a {
    padding: 12px;
    transition: background-color 175ms ease-in-out;
    
    &:hover {
      background-color: #e9e9e9;
    }
  }
`;

export const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>Astronomy Picture Of The Day</Logo>
      </Link>
      <Nav>
        <ul>
          <li>
            <Link to="/zapisane">Favourites</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}