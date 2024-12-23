'use client';

import { Box, Card, CardBody, Container, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <Box>
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6}>
          {[
            'Kit-Kat',
            'Milka',
            'Whispa',
            'Coca-cola',
            'Candy',
            'Candy',
            'Kit-Kat',
            'Milka',
            'Whispa',
            'Coca-cola',
            'Milka',
            'Whispa',
            'Coca-cola',
            'Candy',
            'Candy',
            'Kit-Kat',
            'Milka',
            'Whispa',
          ].map((category) => (
            <Card
              key={category}
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
                  src={
                    'https://user95192.clients-cdnnow.ru/upload/resize_cache/webp/iblock/53e/e8ng99k7zrg5dxiud6ixkw5nmenhrzcp.webp'
                  }
                  alt={category}
                  // boxSize="200px"
                  objectFit="contain"
                />
              </Box>
              <CardBody display="flex" flexDirection="column" alignItems={'center'} key={category}>
                <Tooltip label={category} placement="top-start" hasArrow>
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    noOfLines={2}
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {category}
                  </Text>
                </Tooltip>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
