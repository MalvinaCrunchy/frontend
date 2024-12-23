'use client';

import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillProduct } from 'react-icons/ai';
// import SocialLinks from "../homePage/links/SocialLinks";

// import { motion } from "framer-motion";

interface MenuDrawerProps {
  isOpen: boolean; // `isOpen` is a boolean that determines if the drawer is open
  onClose: () => void; // `onClose` is a function to close the drawer
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  // const MotionButton = motion(Button);
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={'60px 30px'}>
          <VStack align="stretch" spacing={8} fontSize={'18px'}>
            <Link href="/catalog" onClick={onClose}>
              <Button colorScheme="teal" variant="solid" w={'170px'}>
                <Icon mr={2} as={AiFillProduct} boxSize={5} /> Каталог
              </Button>
            </Link>
            <Link color={'brand.lightGrey'} onClick={onClose} href="/">
              Главная
            </Link>
            <Link color={'brand.lightGrey'} onClick={onClose} href="/">
              Акции
            </Link>
            <Link color={'brand.lightGrey'} onClick={onClose} href="/new_products">
              Новинки
            </Link>
            <Link color={'brand.lightGrey'} onClick={onClose} href="/">
              О нас
            </Link>
            <Link color={'brand.lightGrey'} onClick={onClose} href="/">
              Бренды
            </Link>
            <Link color={'brand.lightGrey'} onClick={onClose} href="/">
              Оплата и доставка
            </Link>
            <Link color={'brand.lightGrey'} onClick={onClose} href="/">
              Новым клиентам
            </Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
