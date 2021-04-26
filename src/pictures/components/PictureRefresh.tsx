import * as React from "react";
import styled from "styled-components";
import { Loader } from "../../icons/loader";
import { Refresh } from "../../icons/refresh";

interface PictureRefreshProps {
  isLoading?: boolean;
  onRefresh: () => void;
}

export const PictureRefresh: React.FunctionComponent<PictureRefreshProps> = ({
  isLoading = false,
  onRefresh,
}) => (
  <Container>
    <RefreshButton onClick={onRefresh}>
      {(isLoading && <Loader />) || <Refresh />}
    </RefreshButton>
  </Container>
);

const Container = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const RefreshButton = styled.button`
  border-radius: 50%;
  border: 1px solid #c9c9c9;
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
  background: transparent;
  font-size: 24px;
  line-height: 0;
  cursor: pointer;
  text-align: center;
  transition: background-color 175ms ease-in-out;

  &:hover {
    background: #e9e9e9;
  }
`;
