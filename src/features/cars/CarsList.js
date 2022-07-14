import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Car from './Car';
import { selectCarsIds, getCarsStatus, getCarsError } from './carsSlice';

const CarsList = () => {
  const carsIds = useSelector(selectCarsIds);
  const carStatus = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);

  let content;
  if (carStatus === 'loading') {
    content = <Text>Loading...</Text>;
  } else if (carStatus === 'succeeded') {
    content = carsIds.map(carId => <Car key={carId} id_car={carId} />);
  } else if (carStatus === 'failed') {
    content = <Text>{error}</Text>;
  }

  return <Box as="section">{content}</Box>;
};

export default CarsList;
