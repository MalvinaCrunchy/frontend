'use client';

import { BaseButtonProps } from './types';
import { FiShoppingCart } from 'react-icons/fi';
import { IconButton } from './IconButton';

export const CartButton: React.FC<Omit<BaseButtonProps, 'children'>> = (props) => (
  <IconButton icon={<FiShoppingCart size="24px" />} label="Корзина" {...props} />
);
