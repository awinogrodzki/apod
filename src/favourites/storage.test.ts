import { Picture } from "../pictures/types";
import {
  FAVOURITE_PICTURES_STORAGE_KEY,
  getFavouritePicturesFromStorage,
  removeFavouritePictureFromStorage,
  saveFavouritePictureToStorage,
} from "./storage";

const createMockPicture = (partialPicture: Partial<Picture> = {}): Picture => ({
  copyright: "John Smith",
  date: "28-01-2021",
  explanation: "Lorem ipsum dolor sit amet",
  hdurl: "/url-to-hd-image.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Lorem ipsum",
  url: "/url-to-image.jpg",
  ...partialPicture,
});

describe("favourites storage functions", () => {
  let mockLocalStorage: jest.Mocked<typeof localStorage>;

  beforeEach(() => {
    mockLocalStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      key: jest.fn(),
      length: 0,
      clear: jest.fn(),
    };

    global.localStorage = mockLocalStorage;
  });

  describe("saveFavouritePictureToStorage", () => {
    it("should save a single picture in local storage", () => {
      // given
      const picture = createMockPicture();

      // when
      saveFavouritePictureToStorage(picture);

      // then
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        FAVOURITE_PICTURES_STORAGE_KEY,
        JSON.stringify([picture])
      );
    });

    it("should save a single picture in local storage along with existing pictures", () => {
      // given
      const existingPictures = [
        createMockPicture({ url: "existing-picture.jpg" }),
      ];
      mockLocalStorage.getItem.mockImplementationOnce(() =>
        JSON.stringify(existingPictures)
      );
      const picture = createMockPicture();

      // when
      saveFavouritePictureToStorage(picture);

      // then
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        FAVOURITE_PICTURES_STORAGE_KEY,
        JSON.stringify([...existingPictures, picture])
      );
    });
  });

  describe("removeFavouritePictureFromStorage", () => {
    it("should remove a single picture from local storage using url as a unique key", () => {
      // given
      const picture = createMockPicture();
      mockLocalStorage.getItem.mockImplementationOnce(() =>
        JSON.stringify([picture])
      );

      // when
      removeFavouritePictureFromStorage(picture);

      // then
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        FAVOURITE_PICTURES_STORAGE_KEY,
        "[]"
      );
    });

    it("should remove a single picture from local storage using url as a unique key", () => {
      // given
      const picture = createMockPicture();
      const otherPicture = createMockPicture({
        url: "other-picture.jpg",
      });
      mockLocalStorage.getItem.mockImplementationOnce(() =>
        JSON.stringify([picture, otherPicture])
      );

      // when
      removeFavouritePictureFromStorage(picture);

      // then
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        FAVOURITE_PICTURES_STORAGE_KEY,
        JSON.stringify([otherPicture])
      );
    });
  });

  describe("getFavouritePicturesFromStorage", () => {
    it("should remove a single picture from local storage using url as a unique key", () => {
      // given
      const picture = createMockPicture();
      mockLocalStorage.getItem.mockImplementationOnce(() =>
        JSON.stringify([picture])
      );

      // when
      const result = getFavouritePicturesFromStorage();

      // then
      expect(result).toEqual([picture]);
    });
  });
});
