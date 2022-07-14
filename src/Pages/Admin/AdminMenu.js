import { Button, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <Center>
      <Link to="/add">
        <Button>Dodaj nowy samochód</Button>
      </Link>
    </Center>
  );
};

export default AdminMenu;
