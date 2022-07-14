import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" height="60px" bgColor="black">
      <Text
        color="tomato"
        fontWeight="bold"
        fontSize="larger"
        textAlign="center"
        lineHeight="2"
      >
        Classic4you© All rights reserved
      </Text>
    </Box>
  );
};

export default Footer;
