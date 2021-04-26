import { Picture } from "./types";

// @TODO: Move to .env
const API_KEY = "VWHJMwElJiOTRdTvpJJAjDscRdt4DfY19dLZ2EOd";
const PICTURE_OF_THE_DAY_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`;

export const getRandomPictureOfTheDay = (): Promise<Picture> =>
  fetch(PICTURE_OF_THE_DAY_URL)
    .then((res) => res.json())
    .then((pictures) => pictures[0]);