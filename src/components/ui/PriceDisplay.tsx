'use client';
import React from 'react';
import { HStack, Text } from '@chakra-ui/react';

interface PriceDisplayProps {
  price: number;
  discount: number;
  currency?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, discount, currency = '₽' }) => {
  const finalPrice = discount > 0 ? price - discount : price;

  return discount > 0 ? (
    <HStack spacing={2}>
      <Text textDecoration="line-through" color="gray.600" fontSize="2xl" fontWeight="bold">
        {price}
        {currency}
      </Text>
      <Text color="lightWarning.100" fontSize="2xl" fontWeight="bold">
        {finalPrice}
        {currency}
      </Text>
    </HStack>
  ) : (
    <Text color="black.75" fontSize="2xl" fontWeight="bold">
      {price}
      {currency}
    </Text>
  );
};

export default PriceDisplay;
