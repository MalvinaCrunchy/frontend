'use client';

import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Flex
          position="fixed"
          bottom="100px"
          right="20px"
          zIndex="1000"
          cursor="pointer"
          bg="primary.100"
          w="50px"
          h="50px"
          borderRadius="10px"
          onClick={scrollToTop}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <FiArrowUp size={'45px'} color="white" />
        </Flex>
      )}
    </>
  );
};

export default ScrollToTopButton;
