'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { AiFillProduct } from 'react-icons/ai';
import { useScroll } from '@/components/helpers/StickyContext';
import { CartButton, FavoritesButton, ProfileButton } from '@/components/ui/buttons/buttons';
import { Navbar } from '@/components/layout/navigation/Navbar';
import { MenuDrawer } from '@/components/layout/sidebar/MenuDrawer';
import SearchBar from '@/components/feachers/SearchBar';
import { FaSearch } from 'react-icons/fa';

export const StickyHeader: React.FC = () => {
  const isStickyVisible = useScroll();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <Box w="100%">
      {/* ДЕСКТОП */}
      <Flex
        as={'header'}
        flexDirection={'column'}
        display={{ base: 'none', md: 'flex' }}
        position="fixed"
        top={0}
        left={0}
        width="100%"
        backgroundColor="white"
        boxShadow="sm"
        padding="20px"
        zIndex={isStickyVisible ? 100 : 0}
        opacity={isStickyVisible ? 1 : 0}
        transform={`translateY(${isStickyVisible ? 0 : '-20px'})`}
        transition="all 0.5s ease-in-out"
      >
        <Container maxW={'container.xl'}>
          <Flex justifyContent={'space-between'} gap={'40px'} alignItems={'center'}>
            <Link href="/" style={{ width: '400px', height: 'auto', display: 'block' }}>
              <Image
                src="/icons/Logo-1.svg"
                style={{ width: '150px', height: 'auto', display: 'block', marginBottom: '4px' }}
                alt="logo"
              />
            </Link>
            <Link href="/catalog">
              <Button
                bg="primary.100"
                color={'white'}
                _hover={{ bg: 'primary.100' }}
                variant="solid"
                w={'170px'}
              >
                <Icon mr={2} as={AiFillProduct} boxSize={5} /> Каталог
              </Button>
            </Link>
            <HStack gap="10" width="full">
              <InputGroup flex="1">
                <SearchBar />
                <InputRightElement>
                  <Button size="sm" variant="outline" colorScheme="blue">
                    <FaSearch />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </HStack>
            <CartButton />
            <FavoritesButton />
            <ProfileButton />
          </Flex>
          <Navbar />
        </Container>
      </Flex>

      {/* МОБИЛЬНЫЙ */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        position="fixed"
        top={0}
        left={0}
        p={'20px'}
        width="100%"
        bg={'white'}
        transform={`translateY(${isStickyVisible ? 0 : '-2px'})`}
        transition="all 0.5s ease-in-out"
        zIndex={10}
        boxShadow="sm"
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/icons/Logo-1.svg" alt="logo" width={120} height="auto" />
        </Link>

        {/* Меню на мобильном */}
        <Box w={'45px'} h={'45px'} borderRadius={'10px'}>
          <Icon
            as={AiFillProduct}
            onClick={openDrawer}
            w={'48px'}
            h={'40px'}
            _hover={{ cursor: 'pointer' }}
          />
        </Box>

        <MenuDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      </Flex>
    </Box>
  );
};
