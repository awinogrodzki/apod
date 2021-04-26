import { Picture } from "../pictures/types";
import {
  getFavouritePicturesFromStorage,
  removeFavouritePictureFromStorage,
  saveFavouritePictureToStorage,
} from "./storage";

export const removePictureFromFavourites = (picture: Picture) => {
  removeFavouritePictureFromStorage(picture);
};

export const addPictureToFavourites = (picture: Picture) => {
  saveFavouritePictureToStorage(picture);
};

export const getFavouritePictures = () => {
  return getFavouritePicturesFromStorage();
};
