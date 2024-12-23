'use client';

import Link from 'next/link';
import React from 'react';
import { Flex, Box, FlexProps } from '@chakra-ui/react';

interface NavLinkProps extends FlexProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
  color?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  icon,
  color = 'black.75',
  ...props
}) => {
  return (
    <Link href={href}>
      <Flex
        alignItems="center"
        gap={'4px'}
        py={'2px'}
        px={'5px'}
        borderRadius={'6px'}
        _hover={{ bg: 'black.5' }}
        transition="all 0.3s ease-in-out"
        {...props}
      >
        {icon}
        <Box color={color} flexWrap={'nowrap'}>
          {children}
        </Box>
      </Flex>
    </Link>
  );
};
