import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Header from './Layouts/Header';
import Page from './Layouts/Page';
import Footer from './Layouts/Footer';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH={'100vh'} flexDirection={'column'}>
        <Header />
        <Page />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
