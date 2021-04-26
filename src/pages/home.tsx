import * as React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../layout/default";
import { PictureImage } from "../pictures/components/PictureImage";
import { PictureCard } from "../pictures/components/PictureCard";
import { useRandomPictureQuery } from "../pictures/hooks";
import { PictureRefresh } from "../pictures/components/PictureRefresh";

export const Home: React.FunctionComponent = () => {
  const { isLoading, data: picture, error, refetch } = useRandomPictureQuery();

  if (!isLoading && !picture) {
    return (
      <>
        An error has occurred: Response to api.nasa.gov was successful, but did
        not give any data
      </>
    );
  }

  if (error) {
    return <>An error has occurred: {error.message}</>;
  }

  return (
    <DefaultLayout>
      <PictureContainer>
        <PictureRefresh onRefresh={refetch} />
        <PictureImage picture={picture} isLoading={isLoading} />
        {picture && <PictureCard picture={picture} />}
      </PictureContainer>
    </DefaultLayout>
  );
};

const PictureContainer = styled.div`
  width: 640px;
  max-width: 100%;
  margin: 0 auto;
`;
