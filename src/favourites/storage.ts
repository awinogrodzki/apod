import { Picture } from "../pictures/types";

export const FAVOURITE_PICTURES_STORAGE_KEY = "favouritePictures";

export const getFavouritePicturesFromStorage = (): Picture[] => {
  const picturesAsString = localStorage.getItem(FAVOURITE_PICTURES_STORAGE_KEY);

  if (!picturesAsString) {
    return [];
  }

  return JSON.parse(picturesAsString);
};

export const saveFavouritePictureToStorage = (picture: Picture) => {
  const pictures = getFavouritePicturesFromStorage();

  localStorage.setItem(
    FAVOURITE_PICTURES_STORAGE_KEY,
    JSON.stringify([...pictures, picture])
  );
};

export const removeFavouritePictureFromStorage = (picture: Picture) => {
  const pictures = getFavouritePicturesFromStorage();

  localStorage.setItem(
    FAVOURITE_PICTURES_STORAGE_KEY,
    JSON.stringify(pictures.filter((item) => item.url !== picture.url))
  );
};
