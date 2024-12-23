'use client';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import {
  CartButton,
  FavoritesButton,
  ProfileButton,
  ContactUsButton,
  CatalogButton,
} from '@/components/ui/buttons/buttons';

export const MobileFooter: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      bg={bgColor}
      boxShadow="0 -2px 4px rgba(0, 0, 0, 0.1)"
      zIndex={999}
      display={{ base: 'flex', md: 'flex', lg: 'none' }}
    >
      <Flex justify="space-around" align="center" w="100%" py={2}>
        <CatalogButton />
        <CartButton />
        <FavoritesButton />
        <ContactUsButton />
        <ProfileButton />
      </Flex>
    </Box>
  );
};
