import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Heart } from "../icons/heart";

const Container = styled.div`
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 24px;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const Logo = styled.span`
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  margin-right: 12px;

  @media only screen and (max-width: 960px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 12px;
  }
`;

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
    border-radius: 4px;
    border: 1px solid #c9c9c9;
    display: inline-flex;
    align-items: center;

    &:hover {
      svg {
        color: #E2264D;
      }
    }

    svg {
      margin-right: 12px;
    }

    &:hover {
      background-color: #f3f3f3;
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
            <Link to="/favourites">
              <Heart /> Favourites
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};
