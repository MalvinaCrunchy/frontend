'use client';

import {Box, Button, Flex, Heading, Icon, IconProps, Image, Link, Stack, Text, useToast,} from '@chakra-ui/react';
import React from 'react';
import {FaShoppingBag} from 'react-icons/fa';
import {LiaClipboardListSolid} from 'react-icons/lia';
import {downloadPriceList} from '@/utils/downloadFile';

export default function HeroMain() {
    const toast = useToast();

    const handleDownload = async () => {
        try {
            await downloadPriceList();
            toast({
                title: 'Файл успешно загружен!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error('Ошибка при загрузке файла:', error);
            toast({
                title: 'Не удалось загрузить файл. Попробуйте позже.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    // Компонент Blob
    const Blob = (props: IconProps) => {
        return (
            <Icon
                {...props}
                width={'100%'}
                height={'100%'}
                viewBox="0 0 578 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                    fill="currentColor"
                />
            </Icon>
        );
    };

    return (
        <Stack align={'center'} spacing={{base: 8, md: 10}} direction={{base: 'column', md: 'row'}}>
            <Stack flex={1} spacing={{base: 5, md: 6}}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{base: '2xl', sm: '3xl', lg: '44px'}}
                >
                    <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'primary.100',
                            zIndex: -1,
                        }}
                    >
                        Вкусы мира в одном месте:
                    </Text>
                    <br/>
                    <Text as={'span'} color={'primary.100'}>
                        откройте новинки для вашего бизнеса!
                    </Text>
                </Heading>
                <Text color={'gray.500'} fontSize={{base: 'sm', md: 'md'}}>
                    Euro Sweets — ваш партнёр в мире сладостей и напитков! Мы помогаем развивать бизнес, предлагая
                    прямые поставки популярных европейских и американских товаров. Откройте для своего магазина новые
                    вкусы, эксклюзивные продукты и выгодные условия сотрудничества. Всё это — с гарантией качества и
                    быстрой доставкой прямо к вам!
                </Text>
                <Stack
                    spacing={{base: 4, sm: 6}}
                    direction={{base: 'column', sm: 'row'}}
                    align="center"
                >
                    <Link href="/catalog" w={{base: '100%', sm: 'auto'}}>
                        <Button
                            rounded={'10px'}
                            size={'lg'}
                            fontWeight={500}
                            px={6}
                            bg={'primary.100'}
                            color="white"
                            _hover={{transform: 'translateY(-5px)', boxShadow: 'lg'}}
                            _active={{bg: 'primary.100'}}
                            leftIcon={<FaShoppingBag size={20} color={'white'}/>}
                            w={{base: '100%', sm: 'auto'}}
                        >
                            Начать покупки
                        </Button>
                    </Link>
                    <Button
                        rounded={'10px'}
                        size={'lg'}
                        fontWeight={'normal'}
                        px={6}
                        leftIcon={<LiaClipboardListSolid size={20} color={'black.50'}/>}
                        onClick={handleDownload}
                        w={{base: '100%', sm: 'auto'}}
                    >
                        Получить прайс
                    </Button>
                </Stack>
            </Stack>
            <Flex flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
                <Blob
                    w={'150%'}
                    h={'150%'}
                    position={'absolute'}
                    top={'-20%'}
                    left={0}
                    zIndex={-1}
                    color="primary.25"
                />
                <Box
                    position={'relative'}
                    height={{base: '200px', sm: '300px'}}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'full'}
                    overflow={'hidden'}
                >
                    <Image
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src="/images/kandinsky-download-1734754398403.png"
                    />
                </Box>
            </Flex>
        </Stack>
    );
}
