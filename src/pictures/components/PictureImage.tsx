import * as React from "react";
import styled from "styled-components";
import { Loader } from "../../icons/loader";
import Zoom from "react-medium-image-zoom";
import { Picture } from "../types";

interface PictureImageProps {
  picture?: Picture;
  isLoading?: boolean;
}

export const PictureImage: React.FunctionComponent<PictureImageProps> = ({
  isLoading = false,
  picture,
}) => {
  const [isPictureLoaded, setIsPictureLoaded] = React.useState(false);

  const handleLoad = () => {
    setIsPictureLoaded(true);
  };

  const handleError = () => {
    setIsPictureLoaded(true);
  };

  React.useEffect(() => {
    if (!isPictureLoaded) {
      return;
    }

    setIsPictureLoaded(false);
  }, [picture?.url]);

  return (
    <ImageContainer>
      {(isLoading || !isPictureLoaded) && (
        <LoaderContainer>
          <LoaderIconContainer>
            <Loader />
          </LoaderIconContainer>
        </LoaderContainer>
      )}
      {picture?.url && !isLoading && (
        <Zoom
          wrapStyle={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
            title={picture.title}
            alt={picture.title}
            className="image"
            src={picture?.hdurl}
            onLoad={handleLoad}
            onError={handleError}
          />
        </Zoom>
      )}
    </ImageContainer>
  );
};

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(225, 225, 225, 0.9);
  z-index: 1;
`;

const LoaderIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 8px;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  font-size: 24px;
  line-height: 0;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 280px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    padding-top: 80%;
  }
`;
