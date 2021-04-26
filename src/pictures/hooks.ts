import { useQuery, UseQueryResult } from "react-query";
import { getRandomPictureOfTheDay } from "./api";
import { Picture } from "./types";

export const useRandomPictureQuery = (): UseQueryResult<Picture, TypeError> => {
  return useQuery("picture", () => getRandomPictureOfTheDay(), {
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
