'use client';

import { Box, Button, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { FormModal } from '@/components/modals/FeedBackForm';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export const HeaderTop: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Добавлено состояние для модального окна

  return (
    <Container maxW={'container.xl'}>
      <Box
        as="nav"
        position="relative"
        top={0}
        left={0}
        width="100%"
        backgroundColor="white"
        zIndex={5}
      >
        <Flex
          as={'header'}
          justifyContent={'space-between'}
          alignItems={'center'}
          display={{ base: 'none', md: 'flex' }}
          mx="12px"
        >
          <VStack alignItems="start" spacing={0}>
            <HStack spacing={2} as="a" href="https://yandex.ru/maps/-/CHElqSjT" target="_blank">
              <Box color="primary.50">
                <FaMapMarkerAlt />
              </Box>
              <Text
                fontSize="14px"
                color="black.50"
                _hover={{ color: 'primary.75' }}
                transition="color 0.2s ease-in-out"
              >
                г. Долгопрудный, Дорожный пр., 12
              </Text>
            </HStack>
            <HStack>
              <Box color="primary.50">
                <FaPhone />
              </Box>
              <Text
                as="a"
                href="tel:+79999999999"
                fontSize="14px"
                color="black.50"
                _hover={{ color: 'primary.75' }}
                transition="color 0.2s ease-in-out"
              >
                +79999999999
              </Text>
            </HStack>
          </VStack>
          <Button
            p={{ base: '10px 20px', md: '8px 25px' }}
            borderRadius="10px"
            fontSize="16px"
            fontWeight={400}
            bg="primary.100"
            _hover={{ bg: 'primary.100' }}
            color="white"
            onClick={() => setIsModalOpen(true)}
          >
            Связаться с нами
          </Button>

          {isModalOpen && <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </Flex>
      </Box>
    </Container>
  );
};
