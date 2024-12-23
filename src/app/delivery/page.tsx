'use client';

import React from 'react';
import {Box, Container, Divider, Heading, HStack, ListItem, Text, UnorderedList, VStack,} from '@chakra-ui/react';
import {BsCash, BsCreditCard, BsFileEarmarkText} from 'react-icons/bs';

const PaymentAndDelivery = () => {
    const paymentMethods = [
        {
            icon: <BsCreditCard size={40}/>,
            title: 'Картой на сайте',
            description: 'Оплата осуществляется через защищенный платежный сервис. Принимаются карты Visa, MasterCard и Мир. После оплаты вы получите электронный чек на указанный email.'
        },
        {
            icon: <BsFileEarmarkText size={40}/>,
            title: 'По счету для юридических лиц',
            description: 'Мы выставляем счет на оплату после оформления заказа на сайте и по номеру телефона. Для выставления счета потребуется предоставить реквизиты вашей организации.'
        },
        {
            icon: <BsCash size={40}/>,
            title: 'Наличными',
            description: 'Оплата наличными доступна при самовывозе со склада или при доставке нашим курьером по Москве и Московской области. Обязательно уточните возможность такого способа оплаты при оформлении заказа.'
        }
    ];

    const deliveryMethods = [
        {
            title: 'По Москве и Московской области',
            description: 'Мы осуществляем доставку заказов в магазины и на склады по Москве и Московской области, обеспечивая быстрое и удобное обслуживание для вашего бизнеса.'
        },
        {
            title: 'По всей России',
            description: 'Мы отправляем товары в любые регионы России через надежные транспортные компании. Вы можете выбрать оптимальный способ доставки, а мы обеспечим сохранность и своевременность отправки.'
        },
        {
            title: 'Самовывоз со склада',
            description: 'Заберите заказ самостоятельно с нашего склада в удобное для вас время. Мы гарантируем оперативную подготовку вашего заказа к выдаче.'
        }
    ];

    return (
        <Container maxW="container.md" py={8}>
            <VStack spacing={8} align="center">
                <Box textAlign="center" maxW={'558px'}>
                    <Heading as="h2" size="lg" mb={4}>
                        Как оплатить заказ?
                    </Heading>
                    <Text mb={4}>
                        Возможные способы оплаты меняются в зависимости от вашего адреса, а также способа и времени
                        доставки. Увидеть все доступные способы оплаты и выбрать самый удобный вы можете в корзине.
                    </Text>
                </Box>

                <UnorderedList spacing={2} width="100%" alignItems="flex-start">
                    {paymentMethods.map((method, index) => (
                        <ListItem key={index} p={4} borderRadius="md" display="flex"
                                  flexDirection="column" justifyContent="start">
                            <VStack alignItems='start'>
                                <HStack>
                                    {method.icon}
                                    <Heading as="h3" size="md" mb={0} textAlign="left">{method.title}</Heading>
                                </HStack>
                                <Text mt={1} textAlign="left">{method.description}</Text>
                            </VStack>
                        </ListItem>
                    ))}
                </UnorderedList>

                <Divider/>

                <Box textAlign="center" maxW={'558px'}>
                    <Heading as="h2" size="lg" mb={4}>
                        Способы доставки
                    </Heading>
                    <Text mb={4}>
                        Для магазинов и сетевых клиентов мы предлагаем возможность заключения договора на регулярные
                        поставки. Вы получите стабильный поток товаров, оперативную логистику и гибкие условия
                        сотрудничества. Свяжитесь с нами для обсуждения деталей и формирования индивидуального графика
                        поставок.
                    </Text>
                </Box>

                <UnorderedList spacing={4}>
                    {deliveryMethods.map((method, index) => (
                        <ListItem key={index} p={4} borderRadius="md" display="flex"
                                  flexDirection="column" justifyContent="start">

                            <VStack alignItems='start'>
                                <HStack>
                                    {/*{method.icon}*/}
                                    <Heading as="h3" size="md" mb={0} textAlign="left">{method.title}</Heading>
                                </HStack>
                                <Text mt={1} textAlign="left">{method.description}</Text>
                            </VStack>
                        </ListItem>
                    ))}
                </UnorderedList>
            </VStack>
        </Container>
    );
};

export default PaymentAndDelivery;