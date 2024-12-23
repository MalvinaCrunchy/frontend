'use client';

import { FiHeart } from 'react-icons/fi';
import { BaseButtonProps } from './types';
import { IconButton } from './IconButton';

export const FavoritesButton: React.FC<Omit<BaseButtonProps, 'children'>> = (props) => (
  <IconButton icon={<FiHeart size="24px" />} label="Избранное" {...props} />
);
