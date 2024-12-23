'use client';
import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Categories } from '@/types/api';

interface CategoryCarouselProps {
  categories?: Categories[];
  selectedCategory?: number;
  onCategorySelect: (categoryId: number) => void;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  // Если категорий нет, ничего не рендерим
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <Box overflowX="auto" whiteSpace="nowrap" mt={4} mb={2}>
      <HStack as="ul" spacing={4} p={2}>
        {categories.map((cat) => (
          <Box
            as="li"
            key={cat.id}
            display="inline-block"
            cursor="pointer"
            px={3}
            py={2}
            borderRadius="md"
            bg={selectedCategory === cat.id ? 'blue.600' : 'gray.200'}
            color={selectedCategory === cat.id ? 'white' : 'black'}
            onClick={() => onCategorySelect(cat.id)}
          >
            {cat.name}
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default CategoryCarousel;
