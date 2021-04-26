import { useMemo, useState } from "react";
import { Picture } from "../pictures/types";
import {
  addPictureToFavourites,
  getFavouritePictures,
  removePictureFromFavourites,
} from "./api";
import { getFavouritePicturesFromStorage } from "./storage";

export const useFavouritePicture = (picture: Picture) => {
  const [pictures, setPictures] = useState(() => getFavouritePictures());
  const isFavourite = pictures.some((item) => item.url === picture.url);

  const handleToggle = (isChecked: boolean) => {
    if (isChecked && !isFavourite) {
      addPictureToFavourites(picture);
      setPictures(getFavouritePicturesFromStorage());
      return;
    }

    if (!isChecked && isFavourite) {
      removePictureFromFavourites(picture);
      setPictures(getFavouritePicturesFromStorage());
      return;
    }
  };

  return {
    handleToggle,
    isFavourite,
  };
};

export const useFavouritePictures = () =>
  useMemo(() => getFavouritePictures(), []);
