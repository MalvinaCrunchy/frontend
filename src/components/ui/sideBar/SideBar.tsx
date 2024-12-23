'use client';

import React from 'react';

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Divider,
} from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';

import { IconType } from 'react-icons';
import { Categories } from '@/types/api';

import { getIconByCategoryId } from '../category/icon-utils';

interface NavItemProps extends FlexProps {
  icon: IconType | undefined;
  children: React.ReactNode;
  categoryid?: number;
  isSelected?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, children, isSelected, onClick, ...rest }: NavItemProps) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      color={isSelected ? 'primary.100' : 'inherit'}
      _hover={{
        color: 'primary.100',
      }}
      onClick={onClick}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'primary.100',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
  onCategorySelect?: (categoryId: number) => void;
  selectedCategory?: number;
  categories: Categories[];
}

const SidebarContent = ({
  onClose,
  onCategorySelect,
  selectedCategory,
  categories,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      mt={'32px'}
      bg={useColorModeValue('white', 'gray.900')}
      border="1px"
      borderRadius={'10px'}
      borderColor="black.10"
      w={{ base: 'full', md: 60 }}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          Категории товаров
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {categories.map((category, index) => {
        const icon = getIconByCategoryId(category.id);

        return (
          <React.Fragment key={category.id}>
            <NavItem
              icon={icon!}
              categoryid={category.id}
              isSelected={selectedCategory === category.id}
              onClick={() => onCategorySelect?.(category.id)}
            >
              {category.name}
            </NavItem>
            {index < categories.length - 1 && <Divider width="80%" mx="auto" />}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton variant="outline" onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Категории товаров
      </Text>
    </Flex>
  );
};
interface SimpleSidebarProps {
  onCategorySelect?: (categoryId: number) => void;
  selectedCategory?: number;
  categories?: Categories[]; // Make it optional
}

const SimpleSidebar = ({
  onCategorySelect,
  selectedCategory,
  categories = [],
}: SimpleSidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
        onCategorySelect={onCategorySelect}
        selectedCategory={selectedCategory}
        categories={categories} // Now we handle it with a default empty array
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            onCategorySelect={onCategorySelect}
            selectedCategory={selectedCategory}
            categories={categories} // Same here
          />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

export default SimpleSidebar;
