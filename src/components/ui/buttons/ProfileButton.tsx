'use client';

import { FiUser } from 'react-icons/fi';

import { BaseButtonProps } from './types';
import { IconButton } from './IconButton';

export const ProfileButton: React.FC<Omit<BaseButtonProps, 'children'>> = (props) => {
  return <IconButton icon={<FiUser size="24px" />} label="Кабинет" {...props} />;
};
