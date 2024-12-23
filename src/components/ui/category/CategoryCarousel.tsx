'use client';
import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Categories } from '@/types/api';
import IconCategoryItem from './IconCategoryItem';

interface CategoryCarouselProps {
  categories?: Categories[];
  selectedCategory?: number;
  onCategorySelect: (categoryId: number | undefined) => void;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  // Если нет категорий, не рендерим
  if (!categories || categories.length === 0) {
    return null;
  }

  // Добавляем "Все" в начало массива
  const allCategory: Categories = { id: 0, name: 'Все' };
  const updatedCategories = [allCategory, ...categories];

  return (
    <Box overflowX="auto" whiteSpace="nowrap" mt={4} mb={2}>
      <HStack as="ul" spacing={4} p={2}>
        {updatedCategories.map((cat) => {
          // Проверка на выбранную категорию:
          // если id=0 и selectedCategory===undefined -> выбрана "Все"
          // иначе сравниваем cat.id === selectedCategory
          const isSelected =
            (cat.id === 0 && selectedCategory === undefined) ||
            (cat.id !== 0 && cat.id === selectedCategory);

          return (
            <IconCategoryItem
              key={cat.id}
              categoryId={cat.id}
              label={cat.name}
              isSelected={isSelected}
              onSelect={onCategorySelect}
            />
          );
        })}
      </HStack>
    </Box>
  );
};

export default CategoryCarousel;
