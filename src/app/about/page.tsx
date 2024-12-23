'use client';

import {Box, Container, Heading, Image, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import {CustomButton} from '@/components/ui/buttons/buttons';

export default function About() {
    return (
        <Box bg="gray.50" py={10}>
            <Container maxW="7xl">
                <Stack spacing={8} align="center">
                    <Text fontSize="lg" textAlign="center" color="gray.600">
                        Euro Sweets — ваш надежный партнёр в оптовых поставках с многолетним опытом работы более 10лет.
                        Наши клиенты выбирают нас за стабильное качество продукции, оперативную доставку и
                        профессиональное обслуживание.

                    </Text>
                </Stack>

                <SimpleGrid columns={{base: 1, md: 2}} spacing={10} mt={10}>
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
                            Предлагаем только проверенные товары, соответствующие высоким стандартам.
                        </Text>
                        <Text fontSize="lg" color="gray.600">
                            В нашем ассортименте всегда актуальные новинки, популярные бренды и эксклюзивные позиции.
                        </Text>
                        <Text fontSize="lg" color="gray.600">
                            Мы работаем без посредников, что позволяет предлагать лучшие условия.
                        </Text>
                        <Text fontSize="lg" color="gray.600">
                            Готовы помочь с выбором, а также предоставить гибкие условия сотрудничества, учитывая ваши
                            потребности.
                        </Text>
                        <Text fontSize="lg" color="gray.600">
                            С нами легко выстраивать долгосрочное сотрудничество и достигать новых высот в бизнесе.
                        </Text>
                        <CustomButton variant="secondary">Связаться с нами</CustomButton>
                    </Stack>
                </SimpleGrid>

                <Box mt={20}>
                    <Heading as="h3" size="lg" textAlign="center" color="teal.600">
                        Наши ценности
                    </Heading>
                    <Stack direction={{base: 'column', md: 'row'}} spacing={12} mt={8}>
                        <Box textAlign="center" p={6} borderRadius="lg" bg="white" boxShadow="lg">
                            <Heading as="h4" size="md" color="teal.500">
                                Прямые поставки
                            </Heading>
                            <Text mt={4} color="gray.600">
                                Мы работаем без посредников! Гарантируем выгодные цены и свежесть продукции.
                            </Text>
                        </Box>
                        <Box textAlign="center" p={6} borderRadius="lg" bg="white" boxShadow="lg">
                            <Heading as="h4" size="md" color="teal.500">
                                Контроль качества
                            </Heading>
                            <Text mt={4} color="gray.600">
                                Каждый продукт проходит проверку на соответствие стандартам, чтобы вы были уверены в
                                надежности товаров.
                            </Text>
                        </Box>
                        <Box textAlign="center" p={6} borderRadius="lg" bg="white" boxShadow="lg">
                            <Heading as="h4" size="md" color="teal.500">
                                Актуальный ассортимент
                            </Heading>
                            <Text mt={4} color="gray.600">
                                Мы постоянно обновляем линейку, включая трендовые и востребованные позиции для вашего
                                бизнеса.
                            </Text>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
