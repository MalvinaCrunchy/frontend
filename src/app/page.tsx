'use client';

import {Box, Container, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import HeroMain from '@/components/ui/hero/HeroMain';
import PriceDisplay from '@/components/ui/PriceDisplay';

const IMAGE =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZlRbE-wMVly9BJGAc-4DQF9uGsSIrxhX8w&s';

export default function Home() {
    return (
        <Box>
            <Container maxW="container.xl" py={8}>
                <VStack spacing={12} w='100%'>
                    <HeroMain/>
                    <VStack spacing={10}>
                        <VStack alignItems={'start'} w='100%'>
                            <HStack justifyContent='space-between' alignItems='center' w='100%' px='8px'>
                                <Text fontSize="26px" fontWeight={500}>
                                    Новинки
                                </Text>{' '}
                                <Text fontSize="16px" color='black.50' fontWeight={500}>
                                    123 товара
                                </Text>{' '}
                            </HStack>
                            TODO //сделать переход на страницу новинок
                            <SimpleGrid columns={[2, 3, 4]} spacing={6}>
                                {[
                                    'киткат дуо',
                                    'киндер буэно',
                                    'батарейка дюрасел',
                                    'мекс кола',
                                    'доширак',
                                    'доширак',
                                    'Лапша',
                                    'Снэки',
                                    'Напитки',
                                    'Другое',
                                    'Чипсы',
                                    'Соусы',
                                ]
                                    .slice(0, 4)
                                    .map((category) => (
                                        <Box
                                            role={'group'}
                                            p={6}
                                            // maxW={'330px'}
                                            w={'fit-content'}
                                            bg={'white'}
                                            boxShadow={'2xl'}
                                            rounded={'lg'}
                                            pos={'relative'}
                                            zIndex={1}
                                            key={category}
                                        >
                                            <Box
                                                rounded={'lg'}
                                                // mt={-12}
                                                pos={'relative'}
                                                height={'150px'}
                                                _after={{
                                                    transition: 'all .3s ease',
                                                    content: '""',
                                                    w: 'full',
                                                    h: 'full',
                                                    pos: 'absolute',
                                                    top: 5,
                                                    left: 0,
                                                    backgroundImage: `url(${IMAGE})`,
                                                    filter: 'blur(15px)',
                                                    zIndex: -1,
                                                }}
                                                _groupHover={{
                                                    _after: {
                                                        filter: 'blur(20px)',
                                                    },
                                                }}
                                            >
                                                <Image
                                                    rounded={'lg'}
                                                    height={150}
                                                    // width={282}
                                                    objectFit={'cover'}
                                                    src={IMAGE}
                                                    alt="#"
                                                />
                                            </Box>
                                            <Stack pt={10} align={'center'}>
                                                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                                    БРЭНД
                                                </Text>
                                                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                                    {category}
                                                </Heading>
                                                <Stack direction={'row'} align={'center'}>
                                                    <PriceDisplay price={199} discount={142} currency={'$'}/>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    ))}
                            </SimpleGrid>
                        </VStack>
                        <VStack alignItems={'start'}>
                            <HStack justifyContent='space-between' alignItems='center' w='100%' px='8px'>
                                <Text fontSize="26px" fontWeight={500}>
                                    Хиты
                                </Text>{' '}
                                <Text fontSize="16px" color='black.50' fontWeight={500}>
                                    123 товара
                                </Text>{' '}
                            </HStack>
                            TODO //сделать переход на страницу новинок
                            <SimpleGrid columns={[2, 3, 4]} spacing={6}>
                                {[
                                    'киткат дуо',
                                    'киндер буэно',
                                    'батарейка дюрасел',
                                    'мекс кола',
                                    'доширак',
                                    'доширак',
                                    'Лапша',
                                    'Снэки',
                                    'Напитки',
                                    'Другое',
                                    'Чипсы',
                                    'Соусы',
                                ]
                                    .slice(0, 4)
                                    .map((category) => (
                                        <Box
                                            role={'group'}
                                            p={6}
                                            // maxW={'330px'}
                                            w={'fit-content'}
                                            bg={'white'}
                                            boxShadow={'2xl'}
                                            rounded={'lg'}
                                            pos={'relative'}
                                            zIndex={1}
                                            key={category}
                                        >
                                            <Box
                                                rounded={'lg'}
                                                // mt={-12}
                                                pos={'relative'}
                                                height={'150px'}
                                                _after={{
                                                    transition: 'all .3s ease',
                                                    content: '""',
                                                    w: 'full',
                                                    h: 'full',
                                                    pos: 'absolute',
                                                    top: 5,
                                                    left: 0,
                                                    backgroundImage: `url(${IMAGE})`,
                                                    filter: 'blur(15px)',
                                                    zIndex: -1,
                                                }}
                                                _groupHover={{
                                                    _after: {
                                                        filter: 'blur(20px)',
                                                    },
                                                }}
                                            >
                                                <Image
                                                    rounded={'lg'}
                                                    height={150}
                                                    // width={282}
                                                    objectFit={'cover'}
                                                    src={IMAGE}
                                                    alt="#"
                                                />
                                            </Box>
                                            <Stack pt={10} align={'center'}>
                                                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                                    БРЭНД
                                                </Text>
                                                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                                    {category}
                                                </Heading>
                                                <Stack direction={'row'} align={'center'}>
                                                    <PriceDisplay price={199} discount={142} currency={'$'}/>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    ))}
                            </SimpleGrid>
                        </VStack>
                        <VStack alignItems={'start'}>
                            <HStack justifyContent='space-between' alignItems='center' w='100%' px='8px'>
                                <Text fontSize="26px" fontWeight={500}>
                                    Акции
                                </Text>{' '}
                                <Text fontSize="16px" color='black.50' fontWeight={500}>
                                    123 товара
                                </Text>{' '}
                            </HStack>
                            TODO //сделать переход на страницу новинок
                            <SimpleGrid columns={[2, 3, 4]} spacing={6}>
                                {[
                                    'киткат дуо',
                                    'киндер буэно',
                                    'батарейка дюрасел',
                                    'мекс кола',
                                    'доширак',
                                    'доширак',
                                    'Лапша',
                                    'Снэки',
                                    'Напитки',
                                    'Другое',
                                    'Чипсы',
                                    'Соусы',
                                ]
                                    .slice(0, 4)
                                    .map((category) => (
                                        <Box
                                            role={'group'}
                                            p={6}
                                            // maxW={'330px'}
                                            w={'fit-content'}
                                            bg={'white'}
                                            boxShadow={'2xl'}
                                            rounded={'lg'}
                                            pos={'relative'}
                                            zIndex={1}
                                            key={category}
                                        >
                                            <Box
                                                rounded={'lg'}
                                                // mt={-12}
                                                pos={'relative'}
                                                height={'150px'}
                                                _after={{
                                                    transition: 'all .3s ease',
                                                    content: '""',
                                                    w: 'full',
                                                    h: 'full',
                                                    pos: 'absolute',
                                                    top: 5,
                                                    left: 0,
                                                    backgroundImage: `url(${IMAGE})`,
                                                    filter: 'blur(15px)',
                                                    zIndex: -1,
                                                }}
                                                _groupHover={{
                                                    _after: {
                                                        filter: 'blur(20px)',
                                                    },
                                                }}
                                            >
                                                <Image
                                                    rounded={'lg'}
                                                    height={150}
                                                    // width={282}
                                                    objectFit={'cover'}
                                                    src={IMAGE}
                                                    alt="#"
                                                />
                                            </Box>
                                            <Stack pt={10} align={'center'}>
                                                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                                    БРЭНД
                                                </Text>
                                                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                                    {category}
                                                </Heading>
                                                <Stack direction={'row'} align={'center'}>
                                                    <PriceDisplay price={199} discount={142} currency={'$'}/>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    ))}
                            </SimpleGrid>
                        </VStack>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    );
}
