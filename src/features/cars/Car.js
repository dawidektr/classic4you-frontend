import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCarById } from './carsSlice';
import { Box, Text } from '@chakra-ui/react';

const Car = ({ id_car }) => {
  const car = useSelector(state => selectCarById(state, id_car));

  return (
    <Box as="article">
      <Text>{car.name}</Text>
      <Link to={`car/${car.id_car}`}>Sprawdź</Link>
    </Box>
  );
};

export default Car;
