import * as React from "react";
import styled from "styled-components";
import { useFavouritePictures } from "../favourites/hooks";
import { DefaultLayout } from "../layout/default";
import { PictureImage } from "../pictures/components/PictureImage";

export const Favourites: React.FunctionComponent = () => {
  const pictures = useFavouritePictures();

  return (
    <DefaultLayout>
      <h2>Favourites</h2>
      <PictureList>
        {pictures.map((picture) => (
          <PictureListItem key={picture.url}>
            <PictureImage picture={picture} />
          </PictureListItem>
        ))}
      </PictureList>
    </DefaultLayout>
  );
};

const PictureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -6px;
`;

const PictureListItem = styled.div`
  width: 25%;
  padding: 0 6px;
  margin-bottom: 12px;

  @media only screen and (max-width: 960px) {
    width: 33.333%;
  }

  @media only screen and (max-width: 640px) {
    width: 50%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
