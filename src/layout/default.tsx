import * as React from "react";
import styled from "styled-components";
import { Header } from "./header";
import { GlobalStyle } from "../styles";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 12px;
`;

export const DefaultLayout: React.FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Container>{children}</Container>
  </>
);
