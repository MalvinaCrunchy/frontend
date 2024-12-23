'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Api } from '@/services/api-client';
import { Product } from '@/types/api';
import { StackDivider } from '@chakra-ui/icons';
import { MdLocalShipping } from 'react-icons/md';
import PriceDisplay from '@/components/ui/PriceDisplay';

interface ProductPageProps {
  params: Promise<{ id: string; otherParam?: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const toast = useToast();
  const resolvedParams = React.use(params);
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('yellow.500', 'yellow.300');

  useEffect(() => {
    if (resolvedParams?.id) {
      setId(resolvedParams.id);
    }
  }, [resolvedParams]);

  useEffect(() => {
    if (!id) return;

    const getProductData = async () => {
      try {
        setLoading(true);
        const data = await Api.product.getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Не удалось загрузить данные продукта.');
        toast({
          title: 'Не удалось загрузить данные продукта',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    getProductData();
  }, [id, toast]);

  if (loading) {
    return (
      <Container maxW="container.md" py={8} textAlign="center">
        <Spinner size="xl" color="blue.500" />
        <Text mt={4}>Загрузка данных...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.md" py={8} textAlign="center">
        <Text>{error}</Text>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxW="container.md" py={8} textAlign="center">
        <Text>Продукт не найден.</Text>
      </Container>
    );
  }

  const onAddToCart = () => {
    // Логика добавления в корзину
    toast({
      title: 'Товар добавлен в корзину',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const MotionButton = Button; //TODO  motion(Button)

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const MAX_LENGTH = 320; // Set your desired max length
  const truncatedDescription = product.description.length > MAX_LENGTH ? product.description.substring(0, MAX_LENGTH) + '...' : product.description;

  return (
    <Container maxW="container.lg" py={8}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
        <Flex>
          <Image
            src={product.image_url}
            alt={product.name}
            boxSize="200px"
            objectFit="contain"
            rounded={'md'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 4 }}>
          <Box as={'header'}>
            <Heading
              w={'100%'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
            >
              {product.name}
            </Heading>
            <Text color="primary.100" fontWeight={400} fontSize={'md'}>
              В наличии: 0 шт.
            </Text>
            <PriceDisplay price={product.price} discount={product.discount} />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={<StackDivider borderColor={borderColor} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                {isExpanded ? product.description : truncatedDescription}
              {product.description.length > MAX_LENGTH && (
                <Button ms='10px' onClick={toggleDescription} variant={'link'} color='primary.100'>
                  {isExpanded ? 'Скрыть' : 'Подробнее'}
                </Button>
              )}
              </Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={textColor}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Характеристики:
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Состав:
                  </Text>{' '}
                  {product.compotition}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Кол-во штук в упаковке:
                  </Text>{' '}
                  {product.amount}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Объем:
                  </Text>{' '}
                  {product.volume}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Страна производства:
                  </Text>{' '}
                  {product.country}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <MotionButton
            rounded={'lg'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg="primary.100"
            color={'white'}
            textTransform={'uppercase'}
            onClick={onAddToCart}
            _hover={{ bg: 'brand.primary.100' }}
            // whileHover={{ scale: 1.05 }}
          >
            Добавить в корзину
          </MotionButton>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>доставка 2-3 рабочих дня</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
