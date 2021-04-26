import * as React from "react";
import styled from "styled-components";
import { FavouritesButton } from "../../favourites/components/FavouritesButton";
import { useFavouritePicture } from "../../favourites/hooks";
import { Picture } from "../types";

export interface PictureCardProps {
  picture: Picture;
}

const formatDate = (date: string) => new Date(date).toLocaleDateString();

export const PictureCard: React.FunctionComponent<PictureCardProps> = ({
  picture,
}) => {
  const { isFavourite, handleToggle } = useFavouritePicture(picture);

  return (
    <Container>
      <FavouritesButton
        key={picture.url}
        defaultChecked={isFavourite}
        onToggle={handleToggle}
        className="favouritesButton"
      />
      <Header>
        <Title>{picture.title}</Title>
      </Header>
      <DateSpan>Taken on {formatDate(picture.date)}</DateSpan>
      <Content>{picture.explanation}</Content>
      {picture.copyright && `© ${picture.copyright}`}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-top: 24px;
  margin-bottom: 24px;

  .favouritesButton {
    position: absolute;
    top: 2px;
    right: 0;
    font-size: 4em;
  }
`;

const Title = styled.strong`
  margin-right: 12px;
`;

const Header = styled.header`
  display: flex;
  margin-bottom: 12px;
`;

const Content = styled.p`
  margin: 0 0 12px;
  line-height: 1.5em;
`;

const DateSpan = styled.span`
  display: inline-block;
  margin-bottom: 12px;
`;
