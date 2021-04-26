
import * as React from 'react';
import styled from 'styled-components'
import { Header } from './header';

const Container = styled.div`
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
`;

export const DefaultLayout: React.FunctionComponent = ({ children }) => (
  <>
    <Header />
    <Container>
      {children}
    </Container>
  </>
)