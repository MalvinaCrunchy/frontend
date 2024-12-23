'use client';

import { Box, Container, Heading, Text, Stack, Image, SimpleGrid } from '@chakra-ui/react';
import { CustomButton } from '@/components/ui/buttons/buttons';

export default function About() {
  return (
    <Box bg="gray.50" py={10}>
      <Container maxW="7xl">
        <Stack spacing={8} align="center">
          <Text fontSize="lg" textAlign="center" color="gray.600">
            Мы - надежный поставщик оптовых товаров с многолетним опытом в бизнесе. Наши партнеры
            ценят нас за качество продукции, быструю доставку и отличное обслуживание.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          <Box>
            <Image
              src="/images/warehouse.jpg"
              alt="Warehouse"
              borderRadius="lg"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
          <Stack spacing={6} justify="center">
            <Heading as="h2" size="xl" color="primary.100">
              Почему выбирают нас?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Мы обеспечиваем высокое качество и надежность продукции, поддерживаем широкий
              ассортимент и предоставляем конкурентоспособные цены.
            </Text>
            <Text fontSize="lg" color="gray.600">
              Наша команда всегда готова помочь с выбором, а также предложить гибкие условия
              сотрудничества для вашего бизнеса.
            </Text>
            <CustomButton variant="secondary">Связаться с нами</CustomButton>
          </Stack>
        </SimpleGrid>

        <Box mt={20}>
          <Heading as="h3" size="lg" textAlign="center" color="teal.600">
            Наши ценности
          </Heading>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12} mt={8}>
            <Box textAlign="center" p={6} borderRadius="lg" bg="white" boxShadow="lg">
              <Heading as="h4" size="md" color="teal.500">
                Доверие
              </Heading>
              <Text mt={4} color="gray.600">
                Мы строим долгосрочные и честные отношения с каждым партнером.
              </Text>
            </Box>
            <Box textAlign="center" p={6} borderRadius="lg" bg="white" boxShadow="lg">
              <Heading as="h4" size="md" color="teal.500">
                Качество
              </Heading>
              <Text mt={4} color="gray.600">
                Продукция проходит строгий контроль качества, что гарантирует ее надежность.
              </Text>
            </Box>
            <Box textAlign="center" p={6} borderRadius="lg" bg="white" boxShadow="lg">
              <Heading as="h4" size="md" color="teal.500">
                Иновации
              </Heading>
              <Text mt={4} color="gray.600">
                Мы всегда следим за новыми тенденциями в отрасли, чтобы предложить лучшее.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
