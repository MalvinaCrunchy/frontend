'use client';

import React, { useEffect, useRef, TextareaHTMLAttributes } from 'react';
import { Textarea } from '@chakra-ui/react';

// Определим типы для пропсов компонента
interface AutoResizeTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>; // если нужен обработчик onChange
}

export const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = (props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResizeTextarea();
  }, []);

  return (
    <Textarea
      as="textarea"
      ref={textareaRef}
      onInput={autoResizeTextarea}
      onChange={props.onChange} // обработка события, если оно передано
      overflow="hidden"
      resize="none"
      {...props} // передача остальных пропсов
    />
  );
};
