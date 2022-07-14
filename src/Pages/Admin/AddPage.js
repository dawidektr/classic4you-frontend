import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewCar } from '../../features/cars/carsSlice';

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState('');

  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const canSave =
    [name, description, links].every(Boolean) && addRequestStatus === 'idle';

  const handleSubmit = e => {
    e.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewCar({ name, description, links })).unwrap();

        setName('');
        setDescription('');
        setLinks('');
        navigate(`/admin`, { replace: true });
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
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
        <Button type="submit">Dodaj</Button>
      </Box>
    </Center>
  );
};

export default AddPage;
