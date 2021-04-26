import * as React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { AstronomyPicture } from '../apod/types';

export const Home: React.FunctionComponent = () => {
  const { isLoading, data: picture, error } = useQuery<AstronomyPicture, TypeError>('astronomyPictureOfTheDay', () =>
     fetch('https://api.nasa.gov/planetary/apod?api_key=VWHJMwElJiOTRdTvpJJAjDscRdt4DfY19dLZ2EOd').then(res =>
       res.json()
     )
   );

   if (!isLoading && !picture) {
     return <>An error has occurred: Response to api.nasa.gov was successful, but did not return any data</>;
   }
 
   if (isLoading) {
    return <>Loading...</>
   }

   if (error) {
    return <>An error has occurred: {error.message}</>
   }

  return (
    <>
      <img src={picture!.url} />
    </>
  );
}