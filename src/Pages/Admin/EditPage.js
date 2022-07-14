import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarById, updateCar } from '../../features/cars/carsSlice';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = useSelector(state => selectCarById(state, Number(id)));

  const [name, setName] = useState(car?.name);
  const [description, setDescription] = useState(car?.description);
  const [links, setLinks] = useState(car?.links);
  const [position, setPosition] = useState(parseInt(car?.position));

  const [requestStatus, setRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  if (!car) {
    return (
      <Box>
        <Text>Car not found</Text>
      </Box>
    );
  }

  const canSave =
    [name, description, links, position].every(Boolean) &&
    requestStatus === 'idle';

  const handleSubmit = e => {
    e.preventDefault();
    if (canSave) {
      try {
        setRequestStatus('pending');
        dispatch(
          updateCar({
            id_car: car.id_car,
            name,
            description,
            links,
            position,
          })
        ).unwrap();

        setName('');
        setDescription('');
        setLinks('');
        setPosition(0);
        navigate(`/admin`, { replace: true });
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setRequestStatus('idle');
      }
    }
  };

  return (
    <Center>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel textAlign={'center'} htmlFor="name">
            Name
          </FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel textAlign={'center'} htmlFor="description">
            Description
          </FormLabel>
          <Textarea
            id="description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel textAlign={'center'} htmlFor="links">
            Links
          </FormLabel>
          <Input
            type="text"
            name="links"
            id="links"
            value={links}
            onChange={e => setLinks(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel textAlign={'center'} htmlFor="links">
            Position
          </FormLabel>
          <Input
            type="number"
            name="position"
            id="position"
            value={position}
            onChange={e => setPosition(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Dodaj</Button>
      </Box>
    </Center>
  );
};

export default EditPage;
