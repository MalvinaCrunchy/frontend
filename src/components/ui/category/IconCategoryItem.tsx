'use client';

import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { getIconByCategoryId } from './icon-utils';

interface IconCategoryItemProps {
  categoryId: number;
  label: string;
  isSelected: boolean;
  onSelect: (id: number | undefined) => void;
}

const IconCategoryItem: React.FC<IconCategoryItemProps> = ({
  categoryId,
  label,
  isSelected,
  onSelect,
}) => {
  // Ищем иконку по ID
  const icon: IconType | undefined = getIconByCategoryId(categoryId);

  return (
    <Box
      as="li"
      display="inline-flex"
      alignItems="center"
      cursor="pointer"
      px={3}
      py={2}
      bg="transparent"
      color={isSelected ? 'primary.100' : 'black'}
      // При клике на "Все" (id=0) передаем undefined, иначе — categoryId
      onClick={() => (categoryId === 0 ? onSelect(undefined) : onSelect(categoryId))}
    >
      {/* Рисуем иконку только если она определена */}
      {icon && <Icon as={icon} boxSize={4} mr={2} />}
      {label}
    </Box>
  );
};

export default IconCategoryItem;
