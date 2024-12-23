'use client';

import {
  Box,
  Card,
  CardBody,
  Container,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
  Center,
  Spinner,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';

import { Api } from '@/services/api-client';
import { Brand } from '@/types/api';
import Link from 'next/link';

export default function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await Api.brand.getBrands();
      console.log(data);
      setBrands(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Box>
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6}>
          {brands.map((brand) => (
            <Link key={brand.id} href={`/catalog/?brand_id=${brand.id}`} target="_blank">
              <Card
                key={brand.id}
                maxW="sm"
                overflow="hidden"
                bg="white"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                display="flex"
                flexDirection="column"
              >
                <Box position="relative" p="10px">
                  <Image
                    mx="auto"
                    src={brand.image_url || ''} // Use the brand's image URL or fallback to an empty string
                    alt={brand.name}
                    objectFit="contain"
                    fallbackSrc="https://via.placeholder.com/150" // Placeholder image if no brand image is available
                  />
                </Box>
                <CardBody
                  display="flex"
                  flexDirection="column"
                  alignItems={'center'}
                  key={brand.id}
                >
                  <Tooltip label={brand.name} placement="top-start" hasArrow>
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      noOfLines={2}
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {brand.name}
                    </Text>
                  </Tooltip>
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
        {loading && (
          <Center py={8}>
            <Spinner size="xl" />
          </Center>
        )}
      </Container>
    </Box>
  );
}
