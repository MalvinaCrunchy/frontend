'use client';

import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Image,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { AiFillProduct } from 'react-icons/ai';
import Link from 'next/link';

import { CartButton, FavoritesButton, ProfileButton } from '@/components/ui/buttons/buttons';
import { FaSearch } from 'react-icons/fa';
import SearchBar from '@/components/feachers/SearchBar';

export const HeaderMain: React.FC = () => {
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
        <Box>
          <HStack
            as={'header'}
            justifyContent={'space-between'}
            spacing={4}
            alignItems={'center'}
            mx={'12px'}
            minH={'90px'}
            display={{ base: 'none', md: 'flex' }}
          >
            <HStack spacing={3}>
              <Link href="/" style={{ width: '150px', height: 'auto', display: 'block' }}>
                <Image src="/icons/Logo-1.svg" style={{ marginBottom: '4px' }} alt="logo" />
              </Link>

              <Link href="/catalog">
                <Button
                  bg="primary.100"
                  color={'white'}
                  _hover={{ bg: 'primary.100' }}
                  variant="solid"
                >
                  <Icon mr={2} as={AiFillProduct} boxSize={5} /> Каталог
                </Button>
              </Link>
            </HStack>
            <InputGroup>
              <SearchBar />
              <InputRightElement>
                <Button
                  size="sm"
                  variant="ghost"
                  color="primary.100"
                  _hover={{ bg: 'transparent' }}
                >
                  <FaSearch />
                </Button>
              </InputRightElement>
            </InputGroup>
            <HStack spacing={0}>
              <CartButton />
              <FavoritesButton />
              <ProfileButton />
            </HStack>
          </HStack>

          {/* МОБИЛЬНАЯ ВЕРСИЯ */}
          <InputGroup
            width="full"
            paddingTop={{ base: '85px', md: '0px' }}
            display={{ base: 'flex', md: 'none' }}
          >
            <InputGroup>
              <SearchBar />
              <InputRightElement>
                <Button
                  size="sm"
                  variant="ghost"
                  color="primary.100"
                  _hover={{ bg: 'transparent' }}
                >
                  <FaSearch />
                </Button>
              </InputRightElement>
            </InputGroup>{' '}
            <InputRightElement>
              <Button size="sm" variant="ghost" color="primary.100" _hover={{ bg: 'transparent' }}>
                <FaSearch />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Container>
  );
};
