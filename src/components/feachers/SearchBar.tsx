'use client'

import React, { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    const words = ['Сладости', 'Киткат', 'Буэно', 'Мексиканская кола'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (typing) {
                if (charIndex < words[wordIndex].length) {
                    setPlaceholder(words[wordIndex].slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTyping(false);
                    setTimeout(() => {
                        setTyping(true);
                        setCharIndex(0);
                        setWordIndex((wordIndex + 1) % words.length);
                    }, 500); // задержка перед набором следующего слова
                }
            } else {
                if (charIndex > 0) {
                    setPlaceholder(words[wordIndex].slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setTyping(true);
                    setCharIndex(0);
                    setWordIndex((wordIndex + 1) % words.length);
                }
            }
        }, 150); // интервал времени в миллисекундах

        return () => {
            clearInterval(intervalId);
        };
    }, [wordIndex, charIndex, typing]);

    return (
        <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default SearchBar;