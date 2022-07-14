import { Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Data from '../../Components/Data';
import { getCarsError, getCarsStatus, selectAllCars } from './carsSlice';

const CarsTable = () => {
  const cars = useSelector(selectAllCars);
  const carStatus = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);

  let content;
  if (carStatus === 'loading') {
    content = <Text>Loading...</Text>;
  } else if (carStatus === 'succeeded') {
    content = <Data data={cars} />;
  } else if (carStatus === 'failed') {
    content = <Text>{error}</Text>;
  }

  return content;
};

export default CarsTable;
