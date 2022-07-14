import { Box } from '@chakra-ui/react';
import Navigation from '../Components/Navigation';
const Header = () => {
  return (
    <Box as="header" height="60px" bgColor="black">
      <Navigation />
    </Box>
  );
};

export default Header;
