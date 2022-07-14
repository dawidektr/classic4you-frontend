import { useSelector } from 'react-redux';
import { selectCarById } from '../features/cars/carsSlice';
import { useParams } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const CarPage = () => {
  const { id_car } = useParams();

  const car = useSelector(state => selectCarById(state, Number(id_car)));

  if (!car) {
    return <Box as="section">Car not found</Box>;
  }

  return (
    <Box as="article">
      <Text as={'h2'}>{car.name}</Text>
      <Text>{car.description}</Text>
      <Text>{car.links}</Text>
    </Box>
  );
};

export default CarPage;
