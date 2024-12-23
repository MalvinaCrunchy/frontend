'use client';

import { Link } from '@chakra-ui/react';
import { BaseButtonProps } from './types';
import { AiFillProduct } from 'react-icons/ai';
import { IconButton } from './IconButton';

export const CatalogButton: React.FC<Omit<BaseButtonProps, 'children'>> = (props) => {
  return (
    <>
      <Link href="/catalog">
        <IconButton icon={<AiFillProduct size="24px" />} label="Каталог" {...props} />
      </Link>
    </>
  );
};
