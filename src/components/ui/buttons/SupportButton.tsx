'use client';
import React, { useRef, useEffect } from 'react';
import { Button, Fade, Flex, VStack, useDisclosure } from '@chakra-ui/react';
import { BsChatDots, BsEnvelope, BsTelegram, BsWhatsapp } from 'react-icons/bs';

const SupportIcon = () => {
  const { isOpen, onToggle } = useDisclosure();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Закрыть выпадающий список при клике снаружи
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        // Закрыть список, если клик был вне кнопок и выпадающего списка
        if (isOpen) {
          onToggle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <Flex
      ref={buttonRef}
      position="fixed"
      bottom="40px"
      right="20px"
      zIndex="1000"
      cursor="pointer"
      bg="primary.100"
      w="50px"
      h="50px"
      borderRadius="10px"
      alignItems={'center'}
      justifyContent={'center'}
    >
      <BsChatDots size={30} color="white" onClick={onToggle} />
      <Fade in={isOpen}>
        <VStack
          ref={dropdownRef}
          position="absolute"
          bottom="70px"
          right="0"
          spacing={2}
          align="stretch"
          bg="white"
          boxShadow="md"
          p={4}
          borderRadius="md"
        >
          <Button bg='primary.100' color='white' gap='8px' justifyContent='start'>
            <BsTelegram size={20} />
            Telegram
          </Button>
          <Button bg='primary.100' color='white' gap='8px' justifyContent='start'>
            <BsWhatsapp size={20} />
            Whats App
          </Button>
          <Button bg='primary.100' color='white' gap='8px' justifyContent='start'>
            <BsEnvelope size={20} />
            E-Mail
          </Button>
        </VStack>
      </Fade>
    </Flex>
  );
};

export default SupportIcon;
