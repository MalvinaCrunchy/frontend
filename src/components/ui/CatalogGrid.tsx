'use client';
import React from 'react';
import { Container, SimpleGrid, Spinner, Center } from '@chakra-ui/react';
import ProductCard from '@/components/ui/cards/ProductCard';
import { Product } from '@/types/api';

type LastProductRefType = (node: HTMLDivElement) => void;

interface CatalogGridProps {
  products: Product[];
  loading: boolean;
  lastProductRef: LastProductRefType;
}

const CatalogGrid: React.FC<CatalogGridProps> = ({ products, loading, lastProductRef }) => {
  return (
    <Container maxW="container.lg" py={8}>
      <SimpleGrid columns={[2, 2, 3]} spacing={[2, 4, 8]}>
        {products.map((product, index) => (
          <div ref={index === products.length - 1 ? lastProductRef : undefined} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              country={product.country}
              price={product.price}
              discount={product.discount}
              final_price={product.final_price}
              imageUrl={product.image_url}
            />
          </div>
        ))}
      </SimpleGrid>
      {loading && (
        <Center py={8}>
          <Spinner size="xl" />
        </Center>
      )}
    </Container>
  );
};

export default CatalogGrid;
