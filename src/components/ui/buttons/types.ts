import { ButtonProps } from '@chakra-ui/react';

// Основная кнопка с вариантами стилей
export interface BaseButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

// Кнопка с иконкой
export interface IconButtonProps extends Omit<BaseButtonProps, 'variant'> {
  icon: React.ReactElement;
  label: string;
}
