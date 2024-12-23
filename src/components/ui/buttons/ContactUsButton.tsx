'use client';

import React, { useState } from 'react';

import { BaseButtonProps } from './types';
import { AiOutlineMail } from 'react-icons/ai';
import { IconButton } from './IconButton';
import { FormModal } from '@/components/modals/FeedBackForm';

export const ContactUsButton: React.FC<Omit<BaseButtonProps, 'children'>> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Добавлено состояние для модального окна

  return (
    <>
      <IconButton
        onClick={() => setIsModalOpen(true)}
        icon={<AiOutlineMail size="24px" />}
        label="Связаться с нами"
        {...props}
      />

      {isModalOpen && <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
