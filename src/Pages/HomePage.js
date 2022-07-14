import { Heading } from '@chakra-ui/react';
import CarsList from '../features/cars/CarsList';

const HomePage = () => {
  return (
    <>
      <Heading mb={4}>Sprawdź nasze oferty</Heading>
      <CarsList />
    </>
  );
};

export default HomePage;
