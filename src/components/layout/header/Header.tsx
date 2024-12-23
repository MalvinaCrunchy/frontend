'use client';

import { Box, Container, VStack } from '@chakra-ui/react';

import { Navbar } from '@/components/layout/navigation/Navbar';
import { HeaderTop } from '@/components/layout/header/HeaderTop';
import { HeaderMain } from '@/components/layout/header/HeaderMain';

export const Header: React.FC = () => {
  return (
    <Box
      as="nav"
      position="relative"
      top={0}
      left={0}
      width="100%"
      backgroundColor="white"
      py="10px"
      zIndex={5}
      boxShadow="sm"
    >
      <Container maxW={'container.xl'}>
        <VStack spacing={0}>
          <HeaderTop />
          <HeaderMain />
          <Navbar />
        </VStack>
      </Container>
    </Box>
  );
};
