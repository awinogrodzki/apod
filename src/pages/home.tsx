import * as React from "react";
import styled from "styled-components";
import { Loader } from "../icons/loader";
import { useRandomPictureQuery } from "../picture/hooks";

export const Home: React.FunctionComponent = () => {
  const { isLoading, data: picture, error } = useRandomPictureQuery();

  if (!isLoading && !picture) {
    return (
      <>
        An error has occurred: Response to api.nasa.gov was successful, but did
        not give any data
      </>
    );
  }

  if (isLoading) {
    return (
      <ImageContainer>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </ImageContainer>
    );
  }

  if (error) {
    return <>An error has occurred: {error.message}</>;
  }

  return (
    <ImageContainer>
      <img src={picture!.url} />
    </ImageContainer>
  );
};

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  background: #e9e9e9;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &::before {
    content: "";
    padding-top: 56.25%;
    display: block;
  }
`;
