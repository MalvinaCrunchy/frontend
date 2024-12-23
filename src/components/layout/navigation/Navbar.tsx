'use client';

import { Flex, HStack, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { BsPercent } from 'react-icons/bs';
import { NavLink } from '../../ui/navLinks/NavLink';
import { downloadPriceList } from '@/utils/downloadFile';

export const Navbar: React.FC = () => {
  const toast = useToast();

  const handleDownload = async () => {
    try {
      await downloadPriceList();
      toast({
        title: 'Файл успешно загружен!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Ошибка при загрузке файла:', error);
      toast({
        title: 'Не удалось загрузить файл. Попробуйте позже.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      as={'nav'}
      color={'#0b0f0e'}
      gap={'60px'}
      fontWeight={700}
      fontSize={'16px'}
      alignItems={'center'}
      justifyContent={'center'}
      display={{ base: 'none', md: 'flex' }}
    >
      <NavLink href="/offers" color="lightWarning.100">
        <HStack>
          <BsPercent color="lightWarning.100" />
          <Text>Акции</Text>
        </HStack>
      </NavLink>

      <NavLink href="/new_products">Новинки</NavLink>

      <NavLink href="/about">О нас</NavLink>

      <NavLink href="/brands">Бренды</NavLink>

      <NavLink href="/delivery">Оплата и доставка</NavLink>

      <NavLink href="/" onClick={handleDownload}>
        Прайс лист
      </NavLink>
    </Flex>
  );
};
