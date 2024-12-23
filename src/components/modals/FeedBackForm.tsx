'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';

import { toast } from 'react-toastify';
import { AutoResizeTextarea } from '@/components/helpers/AutoResizeTextArea';
import { sendMessage } from '@/services/telegram';

import { GiCheckMark } from 'react-icons/gi';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormDetails {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formDetails, setFormDetails] = useState<FormDetails>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });

    // Remove errors on change
    if (name === 'phone') setPhoneError(false);
    if (name === 'email') setEmailError(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const numericPhone = formDetails.phone.replace(/\D/g, ''); // Оставляем только цифры
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email);

    // Валидация email
    if (!emailValid) {
      toast.error('E-mail должен содержать @ и заканчиваться на .ru или .com');
      setEmailError(true);
      return;
    }

    if (numericPhone.length !== 11) {
      toast.error('Номер телефона должен содержать 11 цифр (исключая код страны)');
      setPhoneError(true);
      return;
    }

    try {
      const message = `Имя: ${formDetails.fullName}\nТелефон: ${formDetails.phone}\nE-mail: ${formDetails.email}\nСообщение: ${formDetails.message}`;
      setIsLoading(true);
      await sendMessage(message);
      setIsLoading(false);
      toast.success('Сообщение отправлено успешно!');
      setIsSubmitted(true);
      setFormDetails({ fullName: '', email: '', phone: '', message: '' });
    } catch (error) {
      setIsLoading(false);
      console.error('Error:', error);
      toast.error('Ошибка при отправке сообщения');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const isFormValid = formDetails.fullName && formDetails.phone;
  const MotionButton = Button; //TODO motion(Button)
  return (
    <Modal isOpen={isOpen} onClose={handleReset}>
      <ModalOverlay />
      <ModalContent maxW={{ base: '350px', md: '700px' }} p={{ base: '10px', md: '20px 30px 5px' }}>
        <ModalHeader as={'h1'} fontSize={{ base: '24px', md: '40px' }} fontWeight={400}>
          Обратная связь
        </ModalHeader>
        <ModalCloseButton m={'15px 5px 0 0'} />
        <ModalBody>
          {isSubmitted ? (
            <Text fontSize="24px" fontWeight="bold" color="green.500">
              Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
            </Text>
          ) : (
            <form onSubmit={handleSubmit}>
              <VStack align={'start'} spacing="25px">
                <FormControl isRequired>
                  <FormLabel htmlFor="fullName" fontSize={'20px'} color="black.75">
                    Имя
                  </FormLabel>
                  <Input
                    borderColor={'gray.400'}
                    type="text"
                    onChange={handleChange}
                    id="fullName"
                    name="fullName"
                    fontSize={'xs'}
                    value={formDetails.fullName}
                    placeholder={'Введите имя'}
                    _placeholder={{ fontSize: 'xs' }}
                    _focus={{ borderColor: 'brand.main' }}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="phone" fontSize={'20px'} color="black.75">
                    Телефон
                  </FormLabel>
                  <Input
                    borderColor={phoneError ? 'red.500' : 'gray.400'}
                    type="tel"
                    id="phone"
                    name="phone"
                    fontSize="xs"
                    onChange={handleChange}
                    value={formDetails.phone}
                    _placeholder={{ fontSize: 'xs' }}
                    _focus={{ borderColor: phoneError ? 'red.500' : 'brand.main' }}
                    placeholder="Введите номер телефона"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email" fontSize={'20px'} color="black.75">
                    E-mail
                  </FormLabel>
                  <Input
                    borderColor={emailError ? 'red.500' : 'gray.400'}
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formDetails.email}
                    fontSize={'xs'}
                    placeholder={'Введите ваш email'}
                    _placeholder={{ fontSize: 'xs' }}
                    _focus={{ borderColor: emailError ? 'red.500' : 'brand.main' }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={'20px'} color="black.75" htmlFor="message">
                    Сообщение
                  </FormLabel>
                  <AutoResizeTextarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={formDetails.message}
                    placeholder={'Ваш вопрос, направление деятельности, удобный способ связи и др.'}
                  />
                </FormControl>
                <Checkbox gap="1" alignItems="flex-start" defaultChecked icon={<GiCheckMark />}>
                  <Box lineHeight="1" color="black.100">
                    Подписаться на обновления
                  </Box>
                  <Box lineHeight="1.1" fontWeight="normal" color="black.50" mt="1">
                    Нажимая на кнопку вы соглашаетесь с нашей политикой конфединциальности.
                  </Box>
                </Checkbox>
              </VStack>
              <Flex justifyContent={'end'} mt={12}>
                <Button
                  p={'20px'}
                  borderRadius={'10px'}
                  fontSize={'16px'}
                  fontWeight={600}
                  bg={'gray.400'}
                  _hover={{ backgroundColor: 'gray.500' }}
                  color={'white'}
                  mr={3}
                  onClick={handleReset}
                >
                  {isSubmitted ? 'Закрыть' : 'Отмена'}
                </Button>
                <MotionButton
                  p={'20px'}
                  borderRadius={'10px'}
                  fontSize={'16px'}
                  fontWeight={600}
                  bg="primary.100"
                  color={'white'}
                  _hover={{ bg: 'brand.primary.100' }}
                  type="submit"
                  isLoading={isLoading}
                  isDisabled={!isFormValid}
                >
                  Отправить
                </MotionButton>
              </Flex>
            </form>
          )}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
