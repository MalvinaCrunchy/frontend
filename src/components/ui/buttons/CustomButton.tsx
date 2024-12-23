'use client';

import { BaseButtonProps } from './types';
import { Button } from '@chakra-ui/react';

// Базовые стили для всех кнопок
const baseStyles = {
  transition: 'all 0.3s ease-in-out',
};

export const CustomButton: React.FC<BaseButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const styles = {
    primary: {
      bg: 'primary.100',
      color: 'white',
      _hover: { bg: 'primary.80' },
    },
    secondary: {
      bg: 'primary.50',
      color: 'white',
      _hover: { bg: 'primary.60' },
    },
    outline: {
      bg: 'transparent',
      color: 'primary.100',
      border: '1px solid',
      borderColor: 'primary.100',
      _hover: { bg: 'primary.5' },
    },
    ghost: {
      bg: 'transparent',
      color: 'black.75',
      _hover: { color: 'primary.100' },
      _active: { bg: 'transparent' },
      _focus: { boxShadow: 'none' },
    },
  };

  return (
    <Button {...baseStyles} {...styles[variant]} {...props}>
      {children}
    </Button>
  );
};
