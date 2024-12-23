'use client';

import React from 'react';
import {Box, Container, Divider, Grid, GridItem, Heading, HStack, Text, VStack,} from '@chakra-ui/react';
import {BsCash, BsCreditCard, BsFileEarmarkText} from 'react-icons/bs';

const PaymentAndDelivery = () => {
    return (
        <Container maxW="container.md" py={8}>
            <VStack spacing={8} align="center">
                <Box textAlign="center" maxW={'558px'}>
                    <Heading as="h2" size="lg" mb={4}>
                        Как оплатить заказ
                    </Heading>
                    <Text mb={4}>
                        Возможные способы оплаты меняются в зависимости от вашего адреса, а также способа и времени
                        доставки. Увидеть все доступные способы оплаты и выбрать самый удобный вы можете в корзине.
                    </Text>
                </Box>

                <HStack spacing={8} width="100%" alignItems="flex-start">
                    <Box textAlign="left" flex="1" p={4} borderWidth={1} borderRadius="md" boxShadow="md" display="flex"
                         flexDirection="column" justifyContent="start" height="260px">
                        <VStack spacing={2} mb={2} alignItems="center">
                            <BsCreditCard size={40}/>
                            <Heading as="h3" size="md" mb={0} textAlign="left">Картой на сайте</Heading>
                        </VStack>
                        <Text mt={2} textAlign="left">Привяжите банковскую карту, чтобы оплачивать покупки
                            онлайн.</Text>
                    </Box>

                    <Box textAlign="left" flex="1" p={4} borderWidth={1} borderRadius="md" boxShadow="md" display="flex"
                         flexDirection="column" justifyContent="start" height="260px">
                        <VStack spacing={2} mb={2} alignItems="center">
                            <BsFileEarmarkText size={40}/>
                            <Heading as="h3" size="md" mb={0} textAlign="left">Оплата по счету</Heading>
                        </VStack>
                        <Text mt={2} textAlign="left">Выберите эту опцию, если хотите оплатить покупку картой при
                            получении. Курьер возьмёт с собой терминал.</Text>
                    </Box>

                    <Box textAlign="left" flex="1" p={4} borderWidth={1} borderRadius="md" boxShadow="md" display="flex"
                         flexDirection="column" justifyContent="start" height="260px">
                        <VStack spacing={2} mb={2} alignItems="center">
                            <BsCash size={40}/>
                            <Heading as="h3" size="md" mb={0} textAlign="left">Наличными при доставке</Heading>
                        </VStack>
                        <Text mt={2} textAlign="left">Вы можете оплатить заказ наличными при получении, если такой
                            способ оплаты доступен по вашему адресу.</Text>
                    </Box>
                </HStack>

                <Divider/>

                <Box textAlign="center" maxW={'558px'}>
                    <Heading as="h2" size="lg" mb={4}>
                        Способы доставки
                    </Heading>
                </Box>

                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem>
                        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" h='110px'>
                            <Heading as="h3" size="md" mt={2}>Стандартная доставка</Heading>
                            <Text>3-5 рабочих дней</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" h='110px'>
                            <Heading as="h3" size="md" mt={2}>Экспресс-доставка</Heading>
                            <Text>1-2 рабочих дня</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" h='110px'>
                            <Heading as="h3" size="md" mt={2}>Самовывоз</Heading>
                            <Text>Из магазина</Text>
                        </Box>
                    </GridItem>
                </Grid>
            </VStack>
        </Container>
    );
};

export default PaymentAndDelivery;