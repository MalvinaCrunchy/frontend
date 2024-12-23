'use client';

import React from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Skeleton,
  Spacer,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import Link from 'next/link';
import PriceDisplay from '../PriceDisplay';

interface ProductCardProps {
  id: number;
  name: string;
  quantity?: number;
  country: string;
  imageUrl: string;
  price: number;
  discount: number;
  final_price: number;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  quantity = 0,
  country,
  price,
  discount,
  imageUrl,
  onAddToCart = () => {},
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Link href={`/catalog/${id}`} passHref>
      <Card
        maxW="sm"
        h="469px"
        overflow="hidden"
        bg="white"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
        display="flex"
        flexDirection="column"
      >
        <Box position="relative" h="200px">
          <Skeleton
            isLoaded={!isLoading}
            h="200px"
            w="100%"
            startColor="gray.100"
            endColor="gray.300"
            speed={0.8}
          >
            <Image
              mx="auto"
              src={imageUrl}
              alt={name}
              boxSize="200px"
              objectFit="contain"
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          </Skeleton>
        </Box>
        <CardBody display="flex" flexDirection="column" flex="1">
          <Stack spacing="2" flex="1">
            <Tooltip label={name} placement="top-start" hasArrow>
              <Text
                fontSize="md"
                fontWeight="medium"
                noOfLines={2}
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {name}
              </Text>
            </Tooltip>
            <Text fontSize="xs" fontWeight="regular" color="black.50" noOfLines={2}>
              100 гр.
            </Text>
            <Flex justify="space-between" align="center">
              <Badge fontWeight={'600'} bg="primary.60">
                {country}
              </Badge>
            </Flex>
            <Spacer />
            <PriceDisplay price={price} discount={discount} />
          </Stack>
          <Box mt={2}>
            <Button
              width="100%"
              bg="primary.100"
              color="white"
              onClick={(e) => {
                e.preventDefault();
                onAddToCart();
              }}
              disabled={quantity === 0}
              _hover={{ bg: 'primary.100' }}
              aria-label={quantity === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
            >
              {quantity === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
            </Button>
            <Text color="gray.500" fontSize="sm" mt={1} textAlign="center">
              В наличии: {quantity} шт
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
