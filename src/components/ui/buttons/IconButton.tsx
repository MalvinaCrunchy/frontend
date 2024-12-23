'use client';

import { IconButtonProps } from './types';
import { CustomButton } from './CustomButton';
import { VStack, Text } from '@chakra-ui/react';

export const IconButton: React.FC<IconButtonProps> = ({ icon, label, ...props }) => (
  <CustomButton as={VStack} variant="ghost" height="auto" p={2} {...props}>
    {/* spacing={1}  */}
    {icon}
    <Text fontSize="sm">{label}</Text>
  </CustomButton>
);
